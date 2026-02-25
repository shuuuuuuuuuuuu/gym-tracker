import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { WorkoutService, Workout, PeriodStats } from '../services/workout';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective, NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, AppHeaderComponent, NgChartsModule]
})
export class Tab2Page implements OnInit, AfterViewInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  workouts: Workout[] = [];
  stats: any[] = [];
  timeRange: 'day' | 'week' | 'month' | 'year' = 'day';
  currentDate: Date = new Date();

  chartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        label: '訓練量 (Volume)',
        data: [],
        backgroundColor: 'rgba(240, 230, 130, 0.9)',
      }
    ]
  };

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#fff' } },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx) => {
            const value = ctx.raw as number;
            return `訓練量：${value.toLocaleString()} kg`;
          }
        }
      }
    },
    scales: {
      x: { ticks: { color: '#fff', maxRotation: 45, minRotation: 45 }, grid: { display: false } },
      y: { ticks: { color: '#fff' }, beginAtZero: true }
    }
  };

  totalVolume = 0;
  avgIntensity = 0;
  maxIntensityPercent = 0;

  constructor(private workoutService: WorkoutService, private router: Router) {}

  ngOnInit() { 
    this.currentDate = this.normalizeDate(new Date());
    this.loadStatsData();
  }
  ngAfterViewInit() {}

  goProfile() { this.router.navigateByUrl('/profile'); }

  // 🔹 取得統計資料
  loadStatsData() {
    this.workoutService.getAllWorkouts().subscribe({
      next: (res) => {
        this.workouts = res.data;
        this.recalculate();
      },
      error: () => console.error('無法取得統計資料')
    });
  }
  
  onTimeRangeChange() {
    // 每次切換區間都重設為今天
    this.currentDate = this.normalizeDate(new Date());
    this.recalculate();
  }

  calculateVolume(w: Workout): number {
    if (w.unit === 'reps' && w.weight !== null) return w.weight * w.value * w.sets;
    if (w.unit === 'secs') return w.value * w.sets;
    return 0;
  }

  estimate1RM(w: Workout): number | null {
    if (w.unit !== 'reps' || !w.weight || w.value <= 1) return w.weight ?? null;
    return +(w.weight * (1 + w.value / 30)).toFixed(1);
  }

  toDateKey(date: string | Date): string {
    const d = typeof date === 'string' ? new Date(date) : date;
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  private normalizeDate(date: Date): Date {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  filterWorkoutsByRange(): Workout[] {
    const current = this.normalizeDate(this.currentDate);
  
    return this.workouts.filter(w => {
      const workoutDate = this.normalizeDate(new Date(w.workout_date));
  
      switch (this.timeRange) {
  
        case 'day':
          return workoutDate.getTime() === current.getTime();
  
        case 'week': {
          const start = this.normalizeDate(new Date(current));
          start.setDate(start.getDate() - 6);
          return workoutDate >= start && workoutDate <= current;
        }
  
        case 'month':
          return (
            workoutDate.getFullYear() === current.getFullYear() &&
            workoutDate.getMonth() === current.getMonth()
          );
  
        case 'year':
          return workoutDate.getFullYear() === current.getFullYear();
      }
    });
  }

  recalculate() {
    const source = this.filterWorkoutsByRange();

    const byMuscle: Record<string, number> = {};

    source.forEach(w => {
      const muscle = (w as any).primary_muscle ?? '未分類';
      byMuscle[muscle] = (byMuscle[muscle] || 0) + this.calculateVolume(w);
    });

    this.totalVolume = Object.values(byMuscle).reduce((a,b) => a+b, 0);

    this.chartData.labels = Object.keys(byMuscle);
    this.chartData.datasets[0].data = Object.values(byMuscle);

    this.chart?.update();
  }

  // 🔹 日期導覽
  get canGoNext(): boolean {
  const today = this.normalizeDate(new Date());
  const next = this.normalizeDate(new Date(this.currentDate));

  switch (this.timeRange) {
    case 'day':
      next.setDate(next.getDate() + 1);
      break;
    case 'week':
      next.setDate(next.getDate() + 7);
      break;
    case 'month':
      next.setMonth(next.getMonth() + 1);
      break;
    case 'year':
      next.setFullYear(next.getFullYear() + 1);
      break;
  }

  return next.getTime() <= today.getTime();
}

changePeriod(direction: 'prev' | 'next') {
  const today = this.normalizeDate(new Date());
  const newDate = this.normalizeDate(new Date(this.currentDate));

  switch (this.timeRange) {
    case 'day':
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
      break;

    case 'week':
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
      break;

    case 'month':
      newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
      break;

    case 'year':
      newDate.setFullYear(newDate.getFullYear() + (direction === 'next' ? 1 : -1));
      break;
  }

  const normalizedNewDate = this.normalizeDate(newDate);

  // 超過今天就阻止
  if (normalizedNewDate.getTime() > today.getTime()) {
    return;
  }

  this.currentDate = normalizedNewDate;
  this.recalculate();
}

  get displayRange(): string {
    const d = this.currentDate;
    switch (this.timeRange) {
      case 'day': return `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}`;
      case 'week': const start = new Date(d); start.setDate(d.getDate()-6); return `${start.getFullYear()}/${String(start.getMonth()+1).padStart(2,'0')}/${String(start.getDate()).padStart(2,'0')} ~ ${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}`;
      case 'month': return `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}`;
      case 'year': return `${d.getFullYear()}`;
    }
  }
}