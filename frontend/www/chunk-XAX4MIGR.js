import {
  environment
} from "./chunk-4IBXKFKT.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-5KE3V35Y.js";

// src/app/services/auth.ts
var _AuthService = class _AuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = environment.apiUrl;
  }
  login(data) {
    return this.http.post(`${this.apiUrl}/login`, data, { withCredentials: true }).pipe(tap((res) => {
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
    }));
  }
  register(data) {
    console.log("register");
    return this.http.post(`${this.apiUrl}/register`, data);
  }
  changePassword(data) {
    return this.http.post(`${this.apiUrl}/change-password`, data);
  }
  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }
  clearAuth() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
  get token() {
    return localStorage.getItem("token");
  }
  getUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-XAX4MIGR.js.map
