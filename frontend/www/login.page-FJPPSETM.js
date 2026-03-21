import {
  AuthService
} from "./chunk-XAX4MIGR.js";
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonicModule,
  TextValueAccessorDirective,
  ToastController
} from "./chunk-4IBXKFKT.js";
import "./chunk-WCRYE7U4.js";
import "./chunk-W7NNY2EY.js";
import "./chunk-H3EIEZS4.js";
import "./chunk-A3WLMMKZ.js";
import "./chunk-D4JVJAVH.js";
import "./chunk-ZOIVHI5D.js";
import "./chunk-SVOI3SOO.js";
import "./chunk-CNH67HVB.js";
import "./chunk-XQK2O555.js";
import "./chunk-LSWEXWS5.js";
import "./chunk-4U5P7HOO.js";
import "./chunk-ISO4A3EC.js";
import "./chunk-F3JJ4YWB.js";
import "./chunk-QOQL43QQ.js";
import "./chunk-Y3WLEH2N.js";
import "./chunk-IVBL4Y7V.js";
import "./chunk-JCMPO4RJ.js";
import {
  CommonModule,
  Component,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NavController,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  ReactiveFormsModule,
  Router,
  Validators,
  setClassMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-5KE3V35Y.js";
import "./chunk-WLQLEYHL.js";
import "./chunk-ZMYRL6MC.js";
import "./chunk-W4U5NYAB.js";
import "./chunk-2BQZEK2L.js";
import "./chunk-ELTLXXM6.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import {
  __async
} from "./chunk-QHQP2P2Z.js";

// src/app/auth/login/login.page.ts
function LoginPage_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-button", 8);
    \u0275\u0275listener("click", function LoginPage_ng_container_10_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchMode("login"));
    });
    \u0275\u0275text(2, " \u767B\u5165 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-button", 9);
    \u0275\u0275listener("click", function LoginPage_ng_container_10_Template_ion_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchMode("register"));
    });
    \u0275\u0275text(4, " \u8A3B\u518A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function LoginPage_form_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 10)(1, "ion-item", 11);
    \u0275\u0275element(2, "ion-input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-item", 11);
    \u0275\u0275element(4, "ion-input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 14);
    \u0275\u0275listener("click", function LoginPage_form_11_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.login());
    });
    \u0275\u0275text(6, " \u767B\u5165 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-button", 15);
    \u0275\u0275listener("click", function LoginPage_form_11_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToInit());
    });
    \u0275\u0275text(8, " \u8FD4\u56DE ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.loginForm);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.loginForm.invalid);
  }
}
function LoginPage_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 10)(1, "ion-item", 11);
    \u0275\u0275element(2, "ion-input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-item", 11);
    \u0275\u0275element(4, "ion-input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-item", 11);
    \u0275\u0275element(6, "ion-input", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-button", 14);
    \u0275\u0275listener("click", function LoginPage_form_12_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.register());
    });
    \u0275\u0275text(8, " \u8A3B\u518A ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-button", 15);
    \u0275\u0275listener("click", function LoginPage_form_12_Template_ion_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backToInit());
    });
    \u0275\u0275text(10, " \u8FD4\u56DE ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.registerForm);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.registerForm.invalid);
  }
}
var _LoginPage = class _LoginPage {
  constructor(navCtrl, toastCtrl, fb, router, auth) {
    this.navCtrl = navCtrl;
    this.toastCtrl = toastCtrl;
    this.fb = fb;
    this.router = router;
    this.auth = auth;
    this.mode = "init";
    this.initForms();
  }
  initForms() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });
    this.registerForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      name: ["", Validators.required]
    });
  }
  switchMode(mode) {
    this.mode = mode;
  }
  login() {
    return __async(this, null, function* () {
      if (this.loginForm.invalid)
        return;
      this.auth.login(this.loginForm.value).subscribe({
        next: () => __async(this, null, function* () {
          const toast = yield this.toastCtrl.create({
            message: "\u767B\u5165\u6210\u529F",
            duration: 1500,
            color: "success"
          });
          toast.present();
          this.router.navigate(["/tabs/tab1"]);
        }),
        error: (err) => __async(this, null, function* () {
          const msg = err.error?.message || "\u5E33\u865F\u6216\u5BC6\u78BC\u932F\u8AA4";
          const toast = yield this.toastCtrl.create({
            message: msg,
            duration: 2e3,
            color: "danger"
          });
          toast.present();
        })
      });
    });
  }
  register() {
    return __async(this, null, function* () {
      if (this.registerForm.invalid)
        return;
      this.auth.register(this.registerForm.value).subscribe({
        next: () => __async(this, null, function* () {
          const toast = yield this.toastCtrl.create({
            message: "\u8A3B\u518A\u6210\u529F\uFF0C\u8ACB\u767B\u5165",
            duration: 1500,
            color: "success"
          });
          toast.present();
          this.backToInit();
        }),
        error: (err) => __async(this, null, function* () {
          const toast = yield this.toastCtrl.create({
            message: err.error?.message || "\u8A3B\u518A\u5931\u6557",
            duration: 2e3,
            color: "danger"
          });
          toast.present();
        })
      });
    });
  }
  backToInit() {
    this.mode = "init";
    this.loginForm.reset();
    this.registerForm.reset();
  }
};
_LoginPage.\u0275fac = function LoginPage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginPage)(\u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AuthService));
};
_LoginPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["app-login"]], decls: 13, vars: 3, consts: [["fullscreen", "", 1, "login-page"], [1, "hero-section"], [1, "welcome-title"], [1, "subtitle"], [1, "card-section"], [1, "card-box"], [4, "ngIf"], [3, "formGroup", 4, "ngIf"], ["expand", "block", "shape", "round", 3, "click"], ["expand", "block", "shape", "round", "fill", "outline", 1, "ion-margin-top", 3, "click"], [3, "formGroup"], ["lines", "none"], ["placeholder", "Email", "type", "email", "formControlName", "email"], ["placeholder", "\u5BC6\u78BC", "type", "password", "formControlName", "password"], ["expand", "block", "shape", "round", 1, "ion-margin-top", 3, "click", "disabled"], ["fill", "clear", "expand", "block", 3, "click"], ["placeholder", "\u4F7F\u7528\u8005\u540D\u7A31", "type", "text", "formControlName", "name"]], template: function LoginPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3, " Gym ");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Tracker");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 3);
    \u0275\u0275text(7, " Aiming for Muscle Master ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 4)(9, "div", 5);
    \u0275\u0275template(10, LoginPage_ng_container_10_Template, 5, 0, "ng-container", 6)(11, LoginPage_form_11_Template, 9, 2, "form", 7)(12, LoginPage_form_12_Template, 11, 2, "form", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx.mode === "init");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.mode === "login");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.mode === "register");
  }
}, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, IonicModule, IonButton, IonContent, IonInput, IonItem, TextValueAccessorDirective, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['@charset "UTF-8";\n\n\n\n.login-page[_ngcontent-%COMP%] {\n  --background: #000000;\n  display: flex;\n  flex-direction: column;\n}\n.hero-section[_ngcontent-%COMP%] {\n  height: 45%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n  text-align: center;\n  padding: 24px;\n}\n.welcome-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: 1px;\n}\n.welcome-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(249, 249, 6);\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 16px;\n  color: #ffffff;\n  letter-spacing: 1px;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 2px solid #ffffff;\n  width: 0;\n  animation: _ngcontent-%COMP%_typing 3s steps(24, end) forwards, _ngcontent-%COMP%_blink 0.8s step-end infinite;\n  animation-delay: 1s;\n}\n@keyframes _ngcontent-%COMP%_typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 24ch;\n  }\n}\n@keyframes _ngcontent-%COMP%_blink {\n  50% {\n    border-color: transparent;\n  }\n}\n.card-section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 0 20px;\n  margin-top: -40px;\n}\n.card-box[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #1a1a1a;\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);\n}\nion-item[_ngcontent-%COMP%] {\n  --background: #2a2a2a;\n  border-radius: 14px;\n  margin-bottom: 14px;\n}\nion-input[_ngcontent-%COMP%] {\n  --color: #ffffff;\n  --placeholder-color: #9ca3af;\n  --placeholder-opacity: 1;\n}\n/*# sourceMappingURL=login.page.css.map */'] });
var LoginPage = _LoginPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginPage, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule], template: `<ion-content fullscreen class="login-page">

  <!-- \u80CC\u666F\u6F38\u5C64 -->
  <div class="hero-section">
    <h1 class="welcome-title">
      Gym <span>Tracker</span>
    </h1>

    <p class="subtitle">
      Aiming for Muscle Master
    </p>
  </div>

  <!-- \u5361\u7247\u5340 -->
  <div class="card-section">

    <div class="card-box">

      <!-- \u521D\u59CB -->
      <ng-container *ngIf="mode === 'init'">
        <ion-button expand="block" shape="round" (click)="switchMode('login')">
          \u767B\u5165
        </ion-button>

        <ion-button
          expand="block"
          shape="round"
          fill="outline"
          class="ion-margin-top"
          (click)="switchMode('register')">
          \u8A3B\u518A
        </ion-button>
      </ng-container>

      <!-- \u767B\u5165 -->
      <form *ngIf="mode === 'login'" [formGroup]="loginForm">

        <ion-item lines="none">
          <ion-input placeholder="Email" type="email" formControlName="email"></ion-input>
        </ion-item>

        <ion-item lines="none">
          <ion-input placeholder="\u5BC6\u78BC" type="password" formControlName="password"></ion-input>
        </ion-item>

        <ion-button
          expand="block"
          shape="round"
          class="ion-margin-top"
          [disabled]="loginForm.invalid"
          (click)="login()">
          \u767B\u5165
        </ion-button>

        <ion-button fill="clear" expand="block" (click)="backToInit()">
          \u8FD4\u56DE
        </ion-button>
      </form>

      <!-- \u8A3B\u518A -->
      <form *ngIf="mode === 'register'" [formGroup]="registerForm">

        <ion-item lines="none">
          <ion-input placeholder="Email" type="email" formControlName="email"></ion-input>
        </ion-item>

        <ion-item lines="none">
          <ion-input placeholder="\u5BC6\u78BC" type="password" formControlName="password"></ion-input>
        </ion-item>

        <ion-item lines="none">
          <ion-input placeholder="\u4F7F\u7528\u8005\u540D\u7A31" type="text" formControlName="name"></ion-input>
        </ion-item>

        <ion-button
          expand="block"
          shape="round"
          class="ion-margin-top"
          [disabled]="registerForm.invalid"
          (click)="register()">
          \u8A3B\u518A
        </ion-button>

        <ion-button fill="clear" expand="block" (click)="backToInit()">
          \u8FD4\u56DE
        </ion-button>
      </form>

    </div>
  </div>

</ion-content>`, styles: ['@charset "UTF-8";\n\n/* src/app/auth/login/login.page.scss */\n.login-page {\n  --background: #000000;\n  display: flex;\n  flex-direction: column;\n}\n.hero-section {\n  height: 45%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n  text-align: center;\n  padding: 24px;\n}\n.welcome-title {\n  font-size: 2rem;\n  font-weight: 800;\n  letter-spacing: 1px;\n}\n.welcome-title span {\n  color: rgb(249, 249, 6);\n}\n.subtitle {\n  margin-top: 16px;\n  font-size: 16px;\n  color: #ffffff;\n  letter-spacing: 1px;\n  white-space: nowrap;\n  overflow: hidden;\n  border-right: 2px solid #ffffff;\n  width: 0;\n  animation: typing 3s steps(24, end) forwards, blink 0.8s step-end infinite;\n  animation-delay: 1s;\n}\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 24ch;\n  }\n}\n@keyframes blink {\n  50% {\n    border-color: transparent;\n  }\n}\n.card-section {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 0 20px;\n  margin-top: -40px;\n}\n.card-box {\n  width: 100%;\n  background: #1a1a1a;\n  border-radius: 24px;\n  padding: 24px;\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);\n}\nion-item {\n  --background: #2a2a2a;\n  border-radius: 14px;\n  margin-bottom: 14px;\n}\nion-input {\n  --color: #ffffff;\n  --placeholder-color: #9ca3af;\n  --placeholder-opacity: 1;\n}\n/*# sourceMappingURL=login.page.css.map */\n'] }]
  }], () => [{ type: NavController }, { type: ToastController }, { type: FormBuilder }, { type: Router }, { type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/auth/login/login.page.ts", lineNumber: 17 });
})();
export {
  LoginPage
};
//# sourceMappingURL=login.page-FJPPSETM.js.map
