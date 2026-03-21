import {
  AuthService
} from "./chunk-XAX4MIGR.js";
import {
  AppHeaderComponent
} from "./chunk-UXWLRDVQ.js";
import {
  AlertController,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonicModule
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
import "./chunk-BLTW27U7.js";
import {
  CommonModule,
  Component,
  FormsModule,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-5KE3V35Y.js";
import "./chunk-7JBBV5MQ.js";
import "./chunk-T5LCTCQ6.js";
import "./chunk-WLQLEYHL.js";
import "./chunk-ZMYRL6MC.js";
import "./chunk-W4U5NYAB.js";
import "./chunk-2BQZEK2L.js";
import "./chunk-ELTLXXM6.js";
import "./chunk-7GPIVXJN.js";
import "./chunk-CEAAMTO4.js";
import "./chunk-256GWCFY.js";
import "./chunk-5EU4VLVR.js";
import "./chunk-GZ5BDCOT.js";
import "./chunk-HUY7ESWV.js";
import "./chunk-GXFEW35R.js";
import {
  __async
} from "./chunk-QHQP2P2Z.js";

// src/app/pages/profile/profile.page.ts
var _ProfilePage = class _ProfilePage {
  constructor(alertCtrl, authService, router) {
    this.alertCtrl = alertCtrl;
    this.authService = authService;
    this.router = router;
    this.userName = "";
  }
  ngOnInit() {
    const user = this.authService.getUser();
    this.userName = user?.name ?? "";
  }
  openChangePassword() {
    return __async(this, null, function* () {
      const alert2 = yield this.alertCtrl.create({
        header: "\u4FEE\u6539\u5BC6\u78BC",
        inputs: [
          {
            name: "current_password",
            type: "password",
            placeholder: "\u76EE\u524D\u5BC6\u78BC"
          },
          {
            name: "password",
            type: "password",
            placeholder: "\u65B0\u5BC6\u78BC"
          },
          {
            name: "password_confirmation",
            type: "password",
            placeholder: "\u78BA\u8A8D\u65B0\u5BC6\u78BC"
          }
        ],
        buttons: [
          { text: "\u53D6\u6D88", role: "cancel" },
          {
            text: "\u78BA\u8A8D",
            handler: (data) => {
              this.changePassword(data);
            }
          }
        ]
      });
      yield alert2.present();
    });
  }
  changePassword(data) {
    this.authService.changePassword(data).subscribe({
      next: () => {
        alert("\u5BC6\u78BC\u4FEE\u6539\u6210\u529F\uFF0C\u8ACB\u91CD\u65B0\u767B\u5165");
        this.logout();
      },
      error: (err) => {
        alert(err.error?.message || "\u4FEE\u6539\u5931\u6557");
      }
    });
  }
  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.clearAuth();
        this.router.navigate(["/login"], { replaceUrl: true });
      },
      error: () => {
        this.authService.clearAuth();
        this.router.navigate(["/login"], { replaceUrl: true });
      }
    });
  }
};
_ProfilePage.\u0275fac = function ProfilePage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfilePage)(\u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
};
_ProfilePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfilePage, selectors: [["app-profile"]], decls: 16, vars: 1, consts: [["title", "\u500B\u4EBA\u8A2D\u5B9A"], [1, "ion-padding"], [1, "profile-header"], [1, "title"], ["name", "barbell-outline"], ["inset", ""], ["button", "", 3, "click"], ["name", "lock-closed-outline", "slot", "start"], ["name", "exit-outline", "slot", "start"]], template: function ProfilePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header", 0);
    \u0275\u0275elementStart(1, "ion-content", 1)(2, "div", 2)(3, "h2", 3)(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "ion-icon", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "ion-list", 5)(8, "ion-item", 6);
    \u0275\u0275listener("click", function ProfilePage_Template_ion_item_click_8_listener() {
      return ctx.openChangePassword();
    });
    \u0275\u0275element(9, "ion-icon", 7);
    \u0275\u0275elementStart(10, "ion-label");
    \u0275\u0275text(11, "\u4FEE\u6539\u5BC6\u78BC");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-item", 6);
    \u0275\u0275listener("click", function ProfilePage_Template_ion_item_click_12_listener() {
      return ctx.logout();
    });
    \u0275\u0275element(13, "ion-icon", 8);
    \u0275\u0275elementStart(14, "ion-label");
    \u0275\u0275text(15, "\u767B\u51FA");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Hi, ", ctx.userName);
  }
}, dependencies: [IonicModule, IonContent, IonIcon, IonItem, IonLabel, IonList, CommonModule, FormsModule, AppHeaderComponent], styles: ["\n\n.profile-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.profile-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n}\n.profile-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 8px;\n}\n/*# sourceMappingURL=profile.page.css.map */"] });
var ProfilePage = _ProfilePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfilePage, [{
    type: Component,
    args: [{ selector: "app-profile", standalone: true, imports: [IonicModule, CommonModule, FormsModule, AppHeaderComponent], template: '<app-header title="\u500B\u4EBA\u8A2D\u5B9A"></app-header>\n\n<ion-content class="ion-padding">\n  <div class="profile-header">\n    <h2 class="title">\n      <span>Hi, {{ userName }}</span>\n      <ion-icon name="barbell-outline"></ion-icon>\n    </h2>\n  </div>\n  \n  <!-- \u4FEE\u6539\u5BC6\u78BC\u5340\u584A -->\n  <ion-list inset>\n\n    <!-- \u4FEE\u6539\u5BC6\u78BC -->\n    <ion-item button (click)="openChangePassword()">\n      <ion-icon name="lock-closed-outline" slot="start"></ion-icon>\n      <ion-label>\u4FEE\u6539\u5BC6\u78BC</ion-label>\n    </ion-item>\n\n  <!-- \u767B\u51FA -->\n    <ion-item button (click)="logout()">\n      <ion-icon name="exit-outline" slot="start"></ion-icon>\n      <ion-label>\u767B\u51FA</ion-label>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n', styles: ["/* src/app/pages/profile/profile.page.scss */\n.profile-header {\n  margin-bottom: 20px;\n}\n.profile-header h2 {\n  font-size: 22px;\n  font-weight: 600;\n}\n.profile-header .title {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 8px;\n}\n/*# sourceMappingURL=profile.page.css.map */\n"] }]
  }], () => [{ type: AlertController }, { type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfilePage, { className: "ProfilePage", filePath: "src/app/pages/profile/profile.page.ts", lineNumber: 18 });
})();
export {
  ProfilePage
};
//# sourceMappingURL=profile.page-NQKEF2UJ.js.map
