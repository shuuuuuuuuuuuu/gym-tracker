import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// 移除 ToastController 和 AlertController 的導入
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonModal,
  IonRefresher,
  IonRefresherContent,
  IonSelect,
  IonSelectOption,
  IonSkeletonText,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import { WorkoutService, Workout } from '../services/workout';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AppHeaderComponent,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonContent,
    IonDatetime,
    IonFab,
    IonFabButton,
    IonFooter,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonItemOption,
    IonItemOptions,
    IonItemSliding,
    IonLabel,
    IonList,
    IonModal,
    IonRefresher,
    IonRefresherContent,
    IonSelect,
    IonSelectOption,
    IonSkeletonText,
    IonText,
    IonTitle,
    IonToolbar,
  ],
})
export class Tab1Page implements OnInit {

  workouts: Workout[] = [];
  loading = false;
  error: string | null = null;
  currentPage: number = 1;
  totalPages: number = 0;
  pages: number[] = [];

  formWorkout: Partial<Workout> = {
    name: '',
    weight: null,
    unit: 'reps', 
    sets: 0,
    value: 0,
    workout_date: ''
  };

  showCreateModal = false;
  editingWorkoutId: number | null = null;
  
  valueError = false;
  setsError = false; 
  errorMessage: string = '';
  
  constructor(
    private workoutService: WorkoutService,
    private alert: AlertService, 
    private router: Router
    ) {
    console.log('WorkoutService OK');
  }

  ngOnInit() {
    this.fetchWorkouts(this.workoutService.currentPage);
    this.checkValue();
    this.checkSets();
  }

  fetchWorkouts(page: number = this.currentPage || 1, done?: () => void) {
    this.loading = true;
    this.error = null;
    
    this.workoutService.getWorkouts(page).subscribe({
      next: (data: any) => {
        this.workouts = data.data.data;
        this.currentPage = data.data.current_page;
        this.totalPages = data.data.last_page;
        this.loading = false;
        this.generatePages();
        done?.();
      },
      error: (err) => {
        console.error(err);
        this.alert.error('載入失敗', '無法取得健身紀錄'); 
        this.loading = false;
        done?.();
      }
    });
  }
  
  submitWorkout() {
    const request$ = this.editingWorkoutId
      ? this.workoutService.updateWorkout(this.editingWorkoutId, this.formWorkout)
      : this.workoutService.createWorkout(this.formWorkout as Workout);
  
    request$.subscribe({
      next: () => {
        this.closeCreateModal();
        this.fetchWorkouts(this.currentPage);
        this.alert.success(this.editingWorkoutId ? '更新成功' : '新增成功');
        this.editingWorkoutId = null;
      },
      error: (err) => {
        console.error('操作失敗', err);
        this.alert.error('失敗', '請檢查輸入內容是否正確');
      }
    });
  }

  async confirmDelete(workout: any) {
    const result = await this.alert.confirm(
      '確認刪除',
      `確定要刪除「${workout.name}」嗎？`,
      '刪除'
    );

    if (result.isConfirmed) {
      this.deleteWorkout(workout.id);
    }
  }
  
  deleteWorkout(id: number) {
    this.workoutService.deleteWorkout(id).subscribe({
      next: () => {
        this.alert.success('已刪除');
        this.fetchWorkouts(this.currentPage);
      },
      error: () => {
        this.alert.error('錯誤', '刪除失敗');
      }
    });
  }

  openCreateModal() {
    this.showCreateModal = true;
    this.editingWorkoutId = null;
    this.resetForm();
  }

  closeCreateModal() {
    this.showCreateModal = false;
  }

  openEditModal(workout: any) {
    this.editingWorkoutId = workout.id;
    this.formWorkout = {
      name: workout.name,
      weight: workout.weight,
      unit: workout.unit,
      value: workout.value,
      sets: workout.sets,
      workout_date: workout.workout_date,
    };
    this.showCreateModal = true;
    this.checkValue();
    this.checkSets();
  }

  doRefresh(event: any) {
    this.fetchWorkouts(this.currentPage, () => {
      event.target.complete();
    });
  }

  checkValue() {
    this.valueError = !this.formWorkout.value || this.formWorkout.value < 1;
    this.errorMessage = '數值必須>= 1';
  }
  
  checkSets() {
    this.setsError = !this.formWorkout.sets || this.formWorkout.sets < 1;
  }

  generatePages() {
    const maxVisible = 5;
    let start = Math.max(this.currentPage - 2, 1);
    let end = Math.min(start + maxVisible - 1, this.totalPages);
    if (end - start < maxVisible - 1) {
      start = Math.max(end - maxVisible + 1, 1);
    }
    this.pages = [];
    for (let i = start; i <= end; i++) {
      this.pages.push(i);
    }
  }
  
  goPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.fetchWorkouts(page);
    this.generatePages();
  }

  goProfile() {
    this.router.navigateByUrl('/profile');
  }

  resetForm() {
    this.formWorkout = {
      name: '',
      weight: null,
      unit: 'reps', 
      value: 0,
      sets: 0,
      workout_date: ''
    };
    this.checkValue();
    this.checkSets();
  }
}