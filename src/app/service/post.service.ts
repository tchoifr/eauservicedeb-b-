import { Injectable } from '@angular/core';
import { Post } from 'src/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

tableauEvenement : Array<Post> = [];


  constructor() {
      this.tableauEvenement = [
        {
          id: 1,
          titre: 'Premier post',
          message: 'test pour voir ',
          compteur: 0,
          idUser : [3]
        },
        {
          id: 2,
          titre: 'Deuxième post',
          message: 'voir pour test',
          compteur: 2,
          idUser : [1,2]
        },
        {
          id: 3,
          titre: 'Troisième post',
          message: 'pour voir test',
          compteur: 1,
          idUser : [1]
        }
      ]
  }

  evenement(){
    this.tableauEvenement.forEach((evenement) => {
      evenement.compteur = evenement.idUser.length;
    })
    return this.tableauEvenement
  }

}
