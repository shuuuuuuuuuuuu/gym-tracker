import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Workout {
  id?: number;
  name: string;
  weight: null;
  unit: string;
  value: number;
  sets: number;
  workout_date: string;
  created_at?: string;
  updated_at?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  last_page: number;
  total: number;
}

export interface PeriodStats {
  period: string;           // YYYY-MM-DD / YYYY-Wxx / YYYY-MM / YYYY
  totalVolume: number;      // 訓練總量
  max1RM: number | null;    // 最大1RM
  workoutCount: number;     // 訓練次數
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private baseUrl = `${environment.apiUrl}/workouts`;
  currentPage = 1;


  constructor(private http: HttpClient) {}

  // tab1 分頁
  getWorkouts(page: number = 1): Observable<PaginatedResponse<Workout>> {
    this.currentPage = page;

    return this.http.get<PaginatedResponse<Workout>>(`${this.baseUrl}?page=${page}`);
  }

  // tab2 不分頁 for 統計
  getAllWorkouts() {
    return this.http.get<{ data: Workout[] }>(`${this.baseUrl}/all`, {
      withCredentials: true
    });
  }

  getWorkout(id: number): Observable<Workout> {
    return this.http.get<Workout>(`${this.baseUrl}/${id}`);
  }

  createWorkout(workout: Workout): Observable<Workout> {
    return this.http.post<Workout>(this.baseUrl, workout);
  }

  updateWorkout(id: number, workout: Partial<Workout>): Observable<Workout> {
    return this.http.put<Workout>(`${this.baseUrl}/${id}`, workout);
  }

  deleteWorkout(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
