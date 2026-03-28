import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth';
import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
} from '@ionic/angular/standalone';

type Mode = 'init' | 'login' | 'register';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonButton, IonContent, IonInput, IonItem]
})
export class LoginPage {
  mode: Mode = 'init';

  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(
    private toastCtrl: ToastController,
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
    ) {
      this.initForms();
    }

    initForms() {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
  
      this.registerForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        name: ['', Validators.required]
      });
    }
  
    switchMode(mode: Mode) {
      this.mode = mode;
    }

    private async showToast(msg: string, color: string) {
      const toast = await this.toastCtrl.create({
        message: msg,
        duration: 1500,
        color: color
      });
      return await toast.present();
    }
  
    async login() {
      if (this.loginForm.invalid) return;
    
      this.auth.login(this.loginForm.value).subscribe({
        next: () => {
          this.showToast('登入成功', 'success');
          this.router.navigateByUrl('/tabs/tab1');
        },
        error: async (err: { error: { message: string; }; }) => {
          const msg = err.error?.message || '帳號或密碼錯誤';
          const toast = await this.toastCtrl.create({
            message: msg,
            duration: 2000,
            color: 'danger'
          });
          toast.present();
        }
      });
    }
    
    async register() {
      if (this.registerForm.invalid) return;
    
      this.auth.register(this.registerForm.value).subscribe({
        next: async () => {
          const toast = await this.toastCtrl.create({
            message: '註冊成功，請登入',
            duration: 1500,
            color: 'success'
          });
          toast.present();
    
          this.backToInit();
        },
        error: async err => {
          const toast = await this.toastCtrl.create({
            message: err.error?.message || '註冊失敗',
            duration: 2000,
            color: 'danger'
          });
          toast.present();
        }
      });
    }
    
    backToInit() {
      this.mode = 'init';
      this.loginForm.reset();
      this.registerForm.reset();
    }
}