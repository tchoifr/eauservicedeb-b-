import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  emailAdmin = 'admin@admin.com'
  mdpAdmin = 'azerty'

  constructor() { }



  login(email: string, mdp: string) {
    if (email === this.emailAdmin && mdp === this.mdpAdmin){
      this.isAuth = true;
    }else {
      return false
    }
    return true
  }

  logout() {
    this.isAuth = false;
  }
}
