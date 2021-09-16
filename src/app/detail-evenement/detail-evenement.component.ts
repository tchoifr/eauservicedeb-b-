import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../service/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {User} from "../../models/user";
import {UserService} from "../service/user.service";
import {ToastService} from "../service/toast.service";

@Component({
  selector: 'app-detail-evenement',
  templateUrl: './detail-evenement.component.html',
  styleUrls: ['./detail-evenement.component.css']
})
export class DetailEvenementComponent implements OnInit {
  detailEvenement: Post = new Post('','','',[],new Date(),0);
  participants : User[] = new Array<User>()
  loading: boolean = false;

  constructor(private toastService: ToastService, public postService: PostService, private route: ActivatedRoute, public authService: AuthService, public userService: UserService, private router: Router ) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getAllUsers().then(
      () => {
        this.loading = false;
        console.log('getAllUsers reussi')
      }
    ).catch(
      (error) => {
        this.loading = false;
        console.log(error)
      }
    )
    ;

    this.participants = [];
    const index = this.route.snapshot.params['id'];

    this.postService.tableauEvenement.forEach((evenement) => {
      if (evenement._id === index) {
        this.detailEvenement = evenement;
      }
    });

    // if (this.authService.user.isAdmin){

    // this.userService.users.forEach((user)=>{
    //   if (this.detailEvenement.users.includes(user)){
    //     this.participants.push(user);
    //   }
    // })
    // }
    console.log(this.participants);
    console.log(this.detailEvenement);
  }

   supprimerEvenement(evenement: Post){
     this.loading = true;
    this.postService.supprimerEvenement(evenement).then(
      () => {
         this.postService.getAllEvenement().then(
           () => {
             this.toastService.show('Evenement','Suppression evenement réussi !');
             console.log('Suppression evenement reussi !')
             this.router.navigate(['evenement']);
             this.loading = false;
           }
         ).catch(
           (error) => {
             this.loading = false;
             console.log(error);
           }
         )
         ;
      }
    ).catch(
      (error) => {
        console.log('Erreur suppresion evenement component : ', error)
      }
    )

  }

}
