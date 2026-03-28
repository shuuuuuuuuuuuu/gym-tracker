import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  /**
   * 基礎彈窗（需要使用者點擊確定）
   */
  async alert(title: string, text: string = '', icon: SweetAlertIcon = 'info') {
    return Swal.fire({
      title,
      text,
      icon,
      heightAuto: false, // 避免 Ionic 頁面高度跳動
      confirmButtonColor: '#3880ff', // 配合 Ionic 預設藍色
      confirmButtonText: '確定'
    });
  }

  /**
   * 成功彈窗（通常用於註冊成功、設定成功）
   */
  async success(title: string, text: string = '') {
    return this.alert(title, text, 'success');
  }

  /**
   * 錯誤彈窗（處理 API 422, 500 等錯誤）
   */
  async error(title: string, text: string = '') {
    return this.alert(title, text, 'error');
  }

  /**
   * 確認視窗（刪除或登出時使用）
   */
  async confirm(title: string, text: string, confirmText: string = '確定') {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#eb445a', // 警告類使用紅色
      cancelButtonColor: '#92949c',
      confirmButtonText: confirmText,
      cancelButtonText: '取消',
      heightAuto: false
    });
  }
}