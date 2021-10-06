import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../models/user";
import {Post} from "../../models/post";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = new Array<User>()
  baseUrl : string = 'https://eauservicedebebe-api.herokuapp.com';
  // baseUrl : string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  getAllUsers(){

    return new Promise((resolve, reject) => {
      this.httpClient.get(this.baseUrl+'/api/auth')
        .subscribe(
          (response: any) => {
            console.log('response getAllUser : ',response);
            this.users = response;

            console.log('users : ', this.users);
            resolve(response);

          },
          (error) => {
            console.log('error getAllUser : ', error.error.error.message)
            reject(error)
          }
        );
    })


  }

  getUserByID(id: string){

    return new Promise((resolve, reject) => {
      this.httpClient.get(this.baseUrl+'/api/auth/'+id)
        .subscribe(
          (response: any) => {
            console.log('response getUserByID : ',response);
            resolve(response);

          },
          (error) => {
            console.log('error getUserByID : ', error.error.error.message)
            reject(error)
          }
        );
    })


  }

  deleteUser(user: User){

    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.authService.token}`)
    }

    return new Promise((resolve, reject) => {
      this.httpClient.delete(this.baseUrl+'/api/auth/'+user.id, header)
        .subscribe(
          (response: any) => {
            console.log('supprimerUtilisateur response : ', response)
            resolve(response);

          },
          (error) => {
            console.log('error supprimerUtilisateur : ', error.error.error.message)
            reject(error);
          }
        )
    })
  }

  modifierUser(user: User){

    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.authService.token}`)
    }

    return new Promise((resolve, reject) => {
      this.httpClient.put(this.baseUrl+'/api/auth/'+user.id,{utilisateur : user}, header)
        .subscribe(
          (response: any) => {
            resolve(response);
            console.log('modifierUtilisateur response : ', response)


          },
          (error) => {
            reject(error)
            console.log('error modifierUtilisateur : ', error.error.error.message)
          }
        )
    })
  }
}
