import { Injectable } from '@angular/core';
import { Post } from 'src/models/post';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  tableauEvenement : Post[] = new Array<Post>();
  public evenement$ = new Subject<Post[]>();

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  emitStuff() {
    this.evenement$.next(this.tableauEvenement);
  }

  getAllEvenement(){

    return new Promise((resolve, reject) => {
      this.httpClient.get('http://localhost:3000/api/event')
        .subscribe(
          (response: any) => {

            console.log('getAll response : ', response)
            this.tableauEvenement = response;
            console.log('getAll tableauEvenement : ', this.tableauEvenement)
            // this.tableauEvenement.sort((a,b) => b.date - a.date);
            resolve(response);
            this.emitStuff();

          },
          (error) => {
            reject(error);
            console.log('error getAllUser : ', error.error.error.message)
          }
        )
    })


  }

  ajouterEvenement(evenement: Post, image: File){

    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.authService.token}`)
    }

    console.log(image);
    return new Promise((resolve, reject) => {
      const evenementData = new FormData();
      evenementData.append('evenement', JSON.stringify(evenement));
      evenementData.append('image', image, evenement.title);
      this.httpClient.post('http://localhost:3000/api/event', evenementData, header)
        .subscribe(
          (response: any) => {
            resolve(response);
            console.log('ajouterEvenement response : ', response)

          },
          (error) => {
            reject(error);
            console.log('error ajouterEvenement : ', error.error.error.message)
          }
        )
    });
  }

  supprimerEvenement(evenement: Post){

    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.authService.token}`)
    }

    return new Promise((resolve, reject) => {
      this.httpClient.delete('http://localhost:3000/api/event/'+evenement._id, header)
        .subscribe(
          (response: any) => {
            console.log('supprimerEvenement response : ', response)
            resolve(response);

          },
          (error) => {
            console.log('error supprimerEvenement : ', error.error.error.message)
            reject(error);
          }
        )
    })
  }

  modifierEvenement(evenement: Post){

    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.authService.token}`)
    }

    return new Promise((resolve, reject) => {
      this.httpClient.put('http://localhost:3000/api/event/'+evenement._id,{evenement : evenement}, header)
        .subscribe(
          (response: any) => {
            resolve(response);
            console.log('modifierEvenement response : ', response)


          },
          (error) => {
            reject(error)
            console.log('error modifierEvenement : ', error.error.error.message)
          }
        )
    })
  }


}
