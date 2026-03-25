import { ApplicationConfig } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({
      mode: 'ios',            // 強制全平台使用 iOS 視覺風格
      // backButtonText: '返回',  // 順便統一返回按鈕文字
      animated: true          // 確保轉場動畫開啟
    }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(
      withInterceptors([authInterceptor])
      ), // ⭐⭐⭐ 關鍵
  ],
};
