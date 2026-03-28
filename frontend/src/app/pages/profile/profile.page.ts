import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppHeaderComponent } from 'src/app/components/app-header/app-header.component';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth';
import { Router } from '@angular/router';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
} from '@ionic/angular/standalone';
import { AlertService } from 'src/app/services/alert';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, AppHeaderComponent, IonContent, IonIcon, IonItem, IonLabel, IonList]
})
export class ProfilePage implements OnInit {
  userName = '';
  
  constructor(
    private alert: AlertService, 
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    const user = this.authService.getUser();
    this.userName = user?.name ?? '';
  }

  async openChangePassword() {
    const alert = await this.alertCtrl.create({
      header: '修改密碼',
      inputs: [
        {
          name: 'current_password',
          type: 'password',
          placeholder: '目前密碼'
        },
        {
          name: 'password',
          type: 'password',
          placeholder: '新密碼'
        },
        {
          name: 'password_confirmation',
          type: 'password',
          placeholder: '確認新密碼'
        }
      ],
      buttons: [
        { text: '取消', role: 'cancel' },
        {
          text: '確認',
          handler: (data) => {
            this.changePassword(data);
          }
        }
      ]
    });

    await alert.present();
  }

  changePassword(data: any) {
    this.authService.changePassword(data).subscribe({
      next: async () => {
        // 換成 SweetAlert2 的成功視窗，並等待使用者點擊「確定」
        await this.alert.success('修改成功', '密碼修改成功，請重新登入');
        this.logout();
      },
      error: (err) => {
        // 換成 SweetAlert2 的錯誤視窗
        const msg = err.error?.message || '修改失敗';
        this.alert.error('發生錯誤', msg);
      }
    });
  }
  
  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.clearAuth();
        this.router.navigateByUrl('/login', { replaceUrl: true });
      },
      error: () => {
        // 就算後端失敗，也強制登出
        this.authService.clearAuth();
        this.router.navigateByUrl('/login', { replaceUrl: true });
      }
    });
  }
}