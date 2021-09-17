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
  boolVoirPariticipant: boolean = false;

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
             this.toastService.show('Evenement','Suppression evenement réussi !', 'toast-success');
             console.log('Suppression evenement reussi !')
             this.router.navigate(['evenement']);
             this.loading = false;
           }
         ).catch(
           (error) => {
             this.loading = false;
             this.toastService.show('Evenement','Erreur !', 'toast-danger');
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
  participerEvenement(evenement: Post){
    this.loading = true;

    console.log('user id : ',this.authService.user._id);
    console.log('tab evenement : ',this.postService.tableauEvenement);
    if (this.userParticipeDeja(this.authService.user._id, evenement)){
      return false
    }
    else {
      this.detailEvenement.users.push(this.authService.user)
      this.postService.modifierEvenement(this.detailEvenement).then(
        () => {
          this.loading = false;
          this.toastService.show('Evenement','Ajout participation réussi !', 'toast-success');
          console.log('Modification Evenement réussi !')
        }
      ).catch(
        (error) => {
          this.loading = false;
          this.toastService.show('Evenement','Erreur !', 'toast-danger');
          console.log('Erreur modification evenement : ', error)
        }
      )
      return true
    }
  }
  supprimerParticipation(evenement: Post){
    this.loading = true;
    const userId = this.authService.user._id;
    evenement.users.forEach((id, i)=>{
      if (id._id === userId) {
        this.detailEvenement.users.splice(i,1);
        console.log(i);
        this.postService.modifierEvenement(this.detailEvenement).then(
          () => {
            this.loading = false;
            this.toastService.show('Evenement','Suppression participation réussi !', 'toast-success');
            console.log('Suppresion participation réussi');
          }
        ).catch(
          (error) => {
            this.loading = false;
            this.toastService.show('Evenement','Erreur !', 'toast-danger');
            console.log('erreur suppression participation component : ', error)
          }
        )
      }
    })


  }

  userParticipeDeja(id: string, evenement: Post){

    let participeDeja = false;




      evenement.users.forEach((user) => {
        if (user._id === id) {
          console.log(this.detailEvenement)
          participeDeja = true
        }
      })



    // evenement.users.forEach((user) => {
    //   if (user._id === this.authService.user._id){
    //     participeDeja = true;
    //   }
    // })

    return participeDeja

  }



}
