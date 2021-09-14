import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false;
  isAdmin = false;

  user! : User;

  emailAdmin = 'admin@admin.com';
  mdpAdmin = 'azerty';

  emailUser = 'test@test.com';
  mdpUser = 'azerty';

  userAdmin : User = {
    id : 1,
    email : 'admin@admin.com',
    mdp : 'azerty',
    admin : true
  }

  userTest : User = {
    id : 2,
    email : 'test@test.com',
    mdp : 'azerty',
    admin : false
  }

  users : User[] = [
    {
    id : 1,
    email : 'admin@admin.com',
    mdp : 'azerty',
    admin : true
  },
    {
      id : 2,
      email : 'test@test.com',
      mdp : 'azerty',
      admin : false
    },
    {
      id : 3,
      email : 'blabla@bla.com',
      mdp : 'azerty',
      admin : false
    },
    {
      id : 4,
      email : 'test',
      mdp : 'test',
      admin : false
    }
  ]

  constructor(private router: Router) {

    // this.user =
    //   {
    //   id : 1,
    //   email : 'test@test.com',
    //   mdp : 'azerty',
    //   admin : false
    // }


  }

  getAllUsers(){
   return this.users
  }



  login(email: string, mdp: string) {
    let emailOk = false
    let mdpOk = false


    this.users.forEach(
      (user) => {
        let emailOk = false
        let mdpOk = false

        if (email === user.email && mdp === user.mdp){

          if (user.admin === true) {

            this.isAdmin = true
          }
          this.user = user
          this.isAuth = true;
        }
        if (email === user.email) {
           emailOk = true;
        }
        if (mdp === user.mdp) {
           mdpOk = true;
        }
      }
    );

    let authentication = {
      authentifier : this.isAuth,
      email : emailOk,
      mdp : mdpOk
    };

    return authentication

    // if (email === this.emailUser && mdp === this.mdpUser){
    //   this.isAuth = true;
    //   this.user = this.userTest;
    //   return true
    // }
    //
    // if (email === this.emailAdmin && mdp === this.mdpAdmin){
    //   this.isAuth = true;
    //   this.isAdmin = true;
    //   this.user = this.userAdmin;
    //   return true
    // }

  }

  logout() {
    this.isAuth = false;
    this.isAdmin = false;
    alert('Deconnexion réussi')
    this.router.navigate(['accueil'])
  }
}
