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
export class Tab2Page implements OnInit, AfterViewInit  {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  workouts: Workout[] = [];
  stats: any[] = [];
  timeRange: 'day' | 'week' | 'month' | 'year' = 'day';
 
  // 使用者目前看的時間
  currentDate: Date = new Date(); 

  // Chart.js 屬性
 chartData: ChartConfiguration<'line'>['data'] = {
  labels: [],
  datasets: [
    {
      label: '訓練量 (Volume)',
      data: [],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      tension: 0.4
    },
    {
      label: '最大 1RM',
      data: [],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.4
    }
  ]
};

chartOptions: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: { labels: { color: '#fff' } },
    tooltip: { enabled: true }
  },
  scales: {
    x: { ticks: { color: '#fff' } },
    y: { ticks: { color: '#fff' } }
  }
};

  constructor(
    private workoutService: WorkoutService,
    private router: Router) {}

    ngOnInit() {
      this.loadStatsData();
    }
  
    ngAfterViewInit() {
      // Chart 初始化完成後
    }
  
    loadStatsData() {
      this.workoutService.getAllWorkouts().subscribe({
        next: (res) => {
          this.workouts = res.data;
            console.log(this.workouts);
            
          this.recalculate();
        },
        error: () => {
          console.error('無法取得統計資料');
        }
      });
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

    formatDate(d: Date): string {
      return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
    }

    getWeekRange(base: Date) {
      const end = new Date(base);
      const start = new Date(base);
      start.setDate(end.getDate() - 6);
      return { start, end };
    }

    getMonthRange(base: Date) {
      const start = new Date(base.getFullYear(), base.getMonth(), 1);
      const end = new Date(base.getFullYear(), base.getMonth() + 1, 0);
      return { start, end };
    }

    getYearRange(base: Date) {
      const start = new Date(base.getFullYear(), 0, 1);
      const end = new Date(base.getFullYear(), 11, 31);
      return { start, end };
    }

    filterWorkoutsByRange(): Workout[] {
      let start!: Date;
      let end!: Date;
    
      switch (this.timeRange) {
        case 'day':
          start = new Date(this.currentDate);
          end = new Date(this.currentDate);
          break;
    
        case 'week':
          ({ start, end } = this.getWeekRange(this.currentDate));
          break;
    
        case 'month':
          ({ start, end } = this.getMonthRange(this.currentDate));
          break;
    
        case 'year':
          ({ start, end } = this.getYearRange(this.currentDate));
          break;
      }
    
      return this.workouts.filter(w => {
        const d = new Date(w.workout_date);
        return d >= start && d <= end;
      });
    }

    recalculate() {
      const grouped: Record<string, PeriodStats> = {};
      const source = this.filterWorkoutsByRange();
    
      source.forEach(w => {
        const key = this.getDisplayKey(w.workout_date);
    
        if (!grouped[key]) {
          grouped[key] = {
            period: key,
            totalVolume: 0,
            max1RM: null,
            workoutCount: 0
          };
        }
    
        grouped[key].totalVolume += this.calculateVolume(w);
    
        const rm = this.estimate1RM(w);
        if (rm !== null) {
          grouped[key].max1RM = Math.max(grouped[key].max1RM ?? 0, rm);
        }
    
        grouped[key].workoutCount += 1;
      });
    
      this.stats = Object.values(grouped);
      this.updateChart();
    }
    
    getDisplayKey(dateStr: string): string {
      const d = new Date(dateStr);
    
      switch (this.timeRange) {
        case 'day':
          return this.formatDate(d);
    
        case 'week': {
          const { start, end } = this.getWeekRange(d);
          return `${this.formatDate(start)} ~ ${this.formatDate(end)}`;
        }
    
        case 'month':
          return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}`;
    
        case 'year':
          return `${d.getFullYear()}`;
      }
    }

    changePeriod(direction: 'prev' | 'next') {
      const d = new Date(this.currentDate);
    
      switch (this.timeRange) {
        case 'day': d.setDate(d.getDate() + (direction === 'next' ? 1 : -1)); break;
        case 'week': d.setDate(d.getDate() + (direction === 'next' ? 7 : -7)); break;
        case 'month': d.setMonth(d.getMonth() + (direction === 'next' ? 1 : -1)); break;
        case 'year': d.setFullYear(d.getFullYear() + (direction === 'next' ? 1 : -1)); break;
      }
    
      this.currentDate = d;
      this.recalculate();
    }    
    get displayRange(): string {
      switch (this.timeRange) {
        case 'day':
          return this.formatDate(this.currentDate);
    
        case 'week': {
          const { start, end } = this.getWeekRange(this.currentDate);
          return `${this.formatDate(start)} ~ ${this.formatDate(end)}`;
        }
    
        case 'month':
          return `${this.currentDate.getFullYear()}/${String(this.currentDate.getMonth() + 1).padStart(2, '0')}`;
    
        case 'year':
          return `${this.currentDate.getFullYear()}`;
      }
    }
    
    updateChart() {
      this.chartData.labels = this.stats.map(s => s.period);
      this.chartData.datasets[0].data = this.stats.map(s => s.totalVolume);
      this.chartData.datasets[1].data = this.stats.map(s => s.max1RM ?? 0);
  
      this.chart?.update();
    }
  

  goProfile() {
    this.router.navigateByUrl('/profile');
  }
  
}
