import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];
  toastClass : string = '';

  show(header: string, body: string, classe: string) {
    // this.toastClass = classe;
    this.toasts.push({ header, body, classe });
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
