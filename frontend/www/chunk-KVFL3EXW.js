import {
  environment
} from "./chunk-4IBXKFKT.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5KE3V35Y.js";

// src/app/services/workout.ts
var _WorkoutService = class _WorkoutService {
  constructor(http) {
    this.http = http;
    this.baseUrl = `${environment.apiUrl}/workouts`;
    this.currentPage = 1;
  }
  // tab1 分頁
  getWorkouts(page = 1) {
    this.currentPage = page;
    return this.http.get(`${this.baseUrl}?page=${page}`);
  }
  // tab2 不分頁 for 統計
  getAllWorkouts() {
    return this.http.get(`${this.baseUrl}/all`, {
      withCredentials: true
    });
  }
  getWorkout(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  createWorkout(workout) {
    return this.http.post(this.baseUrl, workout);
  }
  updateWorkout(id, workout) {
    return this.http.put(`${this.baseUrl}/${id}`, workout);
  }
  deleteWorkout(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  // 🔹 取得指定時間範圍的主肌群統計
  getStatistics(timeRange, start, end) {
    const params = { range: timeRange, start, end };
    return this.http.get(`${this.baseUrl}/statistics`, { params, withCredentials: true });
  }
};
_WorkoutService.\u0275fac = function WorkoutService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WorkoutService)(\u0275\u0275inject(HttpClient));
};
_WorkoutService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkoutService, factory: _WorkoutService.\u0275fac, providedIn: "root" });
var WorkoutService = _WorkoutService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkoutService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  WorkoutService
};
//# sourceMappingURL=chunk-KVFL3EXW.js.map
