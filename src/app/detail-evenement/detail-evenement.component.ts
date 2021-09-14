import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../service/post.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-detail-evenement',
  templateUrl: './detail-evenement.component.html',
  styleUrls: ['./detail-evenement.component.css']
})
export class DetailEvenementComponent implements OnInit {
  detailEvenement!: Post;
  participants!: User[];

  constructor(public postService: PostService, private route: ActivatedRoute, public authService: AuthService ) { }

  ngOnInit(): void {
    this.participants = [];
    const index = this.route.snapshot.params['id'];
    this.detailEvenement = this.postService.tableauEvenement[index];

    this.authService.users.forEach((user)=>{
      if (this.detailEvenement.idUser.includes(user.id)){
        this.participants.push(user);
      }
    })

    console.log(this.participants);
    console.log(this.detailEvenement);
  }

}
