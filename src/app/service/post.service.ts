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
          idUser : []
        },
        {
          id: 2,
          titre: 'Deuxième post',
          message: 'voir pour test',
          compteur: 2,
          idUser : []
        },
        {
          id: 3,
          titre: 'Troisième post',
          message: 'pour voir test',
          compteur: 1,
          idUser : []
        }
      ]
  }

  evenement(){
    return this.tableauEvenement
  }

}
