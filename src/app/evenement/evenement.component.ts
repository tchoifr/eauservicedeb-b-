import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  constructor(public postService: PostService)  { }
  

  ngOnInit(): void {
  }

}
