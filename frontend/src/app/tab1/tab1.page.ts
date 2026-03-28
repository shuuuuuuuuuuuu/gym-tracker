import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
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

  // 新增表單用物件
  formWorkout: Partial<Workout> = {
    name: '',
    weight: null,
    unit: 'reps', 
    sets: 0,
    value: 0, // reps 或 sec 共用
    workout_date: ''
  };

  showCreateModal = false;
  editingWorkoutId: number | null = null;
  
  valueError = false;
  setsError = false; 
  errorMessage: string = '';
  
  constructor(
    private workoutService: WorkoutService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController, 
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
        console.log('Workouts raw:', data);
        
        this.workouts = data.data.data;
        this.currentPage = data.data.current_page;
        this.totalPages = data.data.last_page;
        this.loading = false;
        this.generatePages();
        done?.();

      },
      error: (err) => {
        console.error(err);
        this.error = '無法取得健身紀錄';
        this.loading = false;
        done?.();
      }
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'top',
    });
    await toast.present();
  }
  
  submitWorkout() {
    const request$ = this.editingWorkoutId
      ? this.workoutService.updateWorkout(this.editingWorkoutId, this.formWorkout)
      : this.workoutService.createWorkout(this.formWorkout as Workout);
  
    request$.subscribe({
      next: (res) => {
        // console.log('新增成功:', res);
        this.closeCreateModal();
        this.fetchWorkouts(this.currentPage); // 更新列表
        this.presentToast(
          this.editingWorkoutId ? '更新成功' : '新增成功');
        // this.resetForm();
        this.editingWorkoutId = null;
      },
      error: (err) => {
        console.error('新增失敗', err);
        this.presentToast('失敗');
      }
    });
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

  openCreateModal() {
    this.showCreateModal = true;
    this.editingWorkoutId = null;
    this.resetForm();
  }

  closeCreateModal() {
    this.showCreateModal = false;
  }

  async confirmDelete(workout: any) {
    const alert = await this.alertCtrl.create({
      header: '確認刪除',
      message: `確定要刪除「${workout.name}」嗎？`,
      buttons: [
        { text: '取消', role: 'cancel' },
        {
          text: '刪除',
          role: 'destructive',
          handler: () => this.deleteWorkout(workout.id),
        },
      ],
    });
  
    await alert.present();
  }
  
  deleteWorkout(id: number) {
    this.workoutService.deleteWorkout(id).subscribe({
      next: () => {
        this.presentToast('已刪除');
  
        // 直接重新抓目前頁
        this.fetchWorkouts(this.currentPage);
      },
      error: () => {
        this.presentToast('刪除失敗');
      }
    });
  
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
    console.log('Pull to refresh');
  
    this.fetchWorkouts(this.currentPage, () => {
      event.target.complete(); // 收起 refresher
    });
  }
  
  // 檢查次數或秒數數值>=1
  checkValue() {
    this.valueError = !this.formWorkout.value || this.formWorkout.value < 1;
    // this.errorMessage = '數值必須大於或等於 1';
    this.errorMessage = '數值必須>= 1';
  }
  
  // 檢查組數數值>=1
  checkSets() {
    this.setsError = !this.formWorkout.sets || this.formWorkout.sets < 1;
    
  }

  generatePages() {
    const maxVisible = 5; // 一次最多顯示 5 個數字
    let start = Math.max(this.currentPage - 2, 1);
    let end = Math.min(start + maxVisible - 1, this.totalPages);
  
    // 修正尾巴不夠的情況
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
  
}