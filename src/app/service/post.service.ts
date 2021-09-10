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
          titre: 'Premier post',
          message: 'test pour voir '
        },
        {
          titre: 'Deuxième post',
          message: 'voir pour test'
        },
        {
          titre: 'Troisième post',
          message: 'pour voir test'
        }
      ]
  }

  evenement(){
    return this.tableauEvenement
  }

}
