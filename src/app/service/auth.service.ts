import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  isAdmin = false;

  user : User;

  emailAdmin = 'admin@admin.com';
  mdpAdmin = 'azerty';

  emailUser = 'test@test.com';
  mdpUser = 'azerty';

  constructor(private router: Router) {
    this.user = new User(0);
    // this.user =
    //   {
    //   id : 1,
    //   email : 'test@test.com',
    //   mdp : 'azerty',
    //   admin : false
    // }


  }



  login(email: string, mdp: string) {


    // this.users.forEach(
    //   (user) => {
    //     if (email === user.email && mdp === user.mdp){
    //
    //       if (user.admin === true) {
    //         this.isAdmin = true
    //       }
    //
    //       this.isAuth = true;
    //     }
    //   }
    // );
    // return this.isAuth;

    if (email === this.emailUser && mdp === this.mdpUser){
      this.isAuth = true;
      this.user = {
        id : 1,
        email : 'test@test.com',
        mdp : 'azerty',
        admin : false
      }
      return true
    }

    if (email === this.emailAdmin && mdp === this.mdpAdmin){
      this.isAuth = true;
      this.isAdmin = true;
      this.user = {
        id : 2,
        email : 'admin@admin.com',
        mdp : 'azerty',
        admin : true
      }
      return true
    }

    return false
  }

  logout() {
    this.isAuth = false;
    this.isAdmin = false;
    alert('Deconnexion réussi')
    this.router.navigate(['accueil'])
  }
}
