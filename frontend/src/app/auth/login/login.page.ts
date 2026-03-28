import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertService } from 'src/app/services/alert';
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
    private alert: AlertService,
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
  login() {
    if (this.loginForm.invalid) return;

    this.auth.login(this.loginForm.value).subscribe({
      next: () => {
        // 使用 Service 噴彈窗，不等待它結束就轉跳
        this.alert.success('登入成功'); 
        this.router.navigateByUrl('/tabs/tab1');
      },
      error: (err) => {
        const msg = err.error?.message || '帳號或密碼錯誤';
        this.alert.error('登入失敗', msg); // 顯示詳細錯誤
      }
    });
  }
  
  register() {
    if (this.registerForm.invalid) return;

    this.auth.register(this.registerForm.value).subscribe({
      next: async () => {
        // 註冊通常需要確認感，可以 await 等使用者點擊確定再回初始頁
        await this.alert.success('註冊成功', '請使用新帳號登入');
        this.backToInit();
      },
      error: (err) => {
        const msg = err.error?.message || '註冊失敗';
        this.alert.error('錯誤', msg);
      }
    });
  }

  backToInit() {
    this.mode = 'init';
    this.loginForm.reset();
    this.registerForm.reset();
  }
}