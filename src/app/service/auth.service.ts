import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = '';
  user : User = new User('');
  baseUrl : string = 'http://localhost:3000';



  constructor(private router: Router, private httpClient: HttpClient) {
  }

  creerUtilisateur(user: User) {

    return new Promise((resolve, reject) => {
      this.httpClient.post(this.baseUrl+'/api/auth/signup',{utilisateur: user}    )
        .subscribe(
          (response) => {
            this.login(user).then(
              (response) => {
                resolve(response);
              }
            ).catch(
              (error) => {
                reject(error);
              }
            )
          },
          (error) => {
            reject(error);
          }
        );
    })

  }



  login(user: User) {

    return new Promise((resolve, reject) => {
      this.httpClient.post(
        this.baseUrl+'/api/auth/login', {utilisateur: user})
        .subscribe(
          (response:any) => {
            console.log('response login : ', response);
            this.user = response.user;
            this.token = response.token
            // this.isAuth = true;
            console.log('user : ',this.user);
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    })

  }

  logout() {
    this.user = new User('');
    this.token = '';
    alert('Deconnexion réussi')
    this.router.navigate(['accueil'])
  }
}
