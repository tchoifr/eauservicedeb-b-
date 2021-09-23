import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = '';
  user : User = new User('');
  baseUrl : string = 'https://eauservicedebebe-api.herokuapp.com';



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

  envoieMail(to: string, subject: string, text: string){


    return new Promise((resolve, reject) => {
      this.httpClient.post(this.baseUrl+'/api/send-mail',{to: to, subject: subject, text: text}    )
        .subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    })
  }



  login(user: User) {


    const header = {
      headers: new HttpHeaders()
        .set('Access-Control-Allow-Origin',  `*`),
    }

    return new Promise((resolve, reject) => {
      this.httpClient.post(
        this.baseUrl+'/api/auth/login', {utilisateur: user}, header)
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

    if (confirm('Etes vous sur de vouloir vous deconnecter ?')){
    this.user = new User('');
    this.token = '';
    alert('Deconnexion réussi')
    this.router.navigate(['accueil'])
    }
  }
}
