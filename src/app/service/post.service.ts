import { Injectable } from '@angular/core';
import { Post } from 'src/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

tableauEvenement : Array<Post> = [];

  constructor() { console.log(this.tableauEvenement) }

  evenement(){
    return this.tableauEvenement
  }

}
