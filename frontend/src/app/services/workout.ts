import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Workout {
  id?: number;
  name: string;
  weight: number | null;
  unit: string;
  value: number;
  sets: number;
  workout_date: string;
  primary_muscle?: string; 
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
  muscle: string;       // 主肌群
  volume: number;       // 訓練量
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

  // 🔹 取得指定時間範圍的主肌群統計
  getStatistics(timeRange: 'day' | 'week' | 'month' | 'year', start: string, end: string): Observable<{ data: PeriodStats[] }> {
    const params = { range: timeRange, start, end };
    return this.http.get<{ data: PeriodStats[] }>(`${this.baseUrl}/statistics`, { params, withCredentials: true });
  }
}
