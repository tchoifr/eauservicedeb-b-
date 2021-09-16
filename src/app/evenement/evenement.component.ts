import {Component, Input, OnInit} from '@angular/core';
import { PostService } from '../service/post.service';
import {AuthService} from "../service/auth.service";
import {LoginComponent} from "../login/login.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {Post} from "../../models/post";
import {UserService} from "../service/user.service";
import {ToastService} from "../service/toast.service";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  loading: boolean = false

  constructor(private toastService: ToastService, public postService: PostService, public authService: AuthService, private modalService: NgbModal, private router: Router, private userService: UserService)  { }


  ngOnInit(): void {
    this.loading = true;
    this.postService.getAllEvenement().then(
      () => {
        this.loading = false;
        console.log('getAllEvenement reussi')
      }
    ).catch(
      (error) => {
        this.loading = false;
        console.log(error)
      }
    );
    this.userService.getAllUsers().then(
      () => {
        console.log('getAllUsers reussi')
      }
    ).catch(
      (error) => {

        console.log(error)
      }
    );
  }

  supprimerParticipation(index: number){
    this.loading = true;
    const userId = this.authService.user._id;
    this.postService.tableauEvenement[index].users.forEach((id, i)=>{
      if (id._id === userId) {
        console.log(i);
        this.postService.tableauEvenement[index].users.splice(i,1);
        this.postService.modifierEvenement(this.postService.tableauEvenement[index]).then(
          () => {
            this.loading = false;
            this.toastService.show('Evenement','Suppression participation réussi !');
            console.log('Suppresion participation réussi');
          }
        ).catch(
          (error) => {
            this.loading = false;
            console.log('erreur suppression participation component : ', error)
          }
        )
      }
    })
    console.log(this.postService.tableauEvenement[index].users)

  }

  supprimerEvenement(evenement: Post){
    this.loading = true;
    this.postService.supprimerEvenement(evenement).then(
      () => {
        this.postService.getAllEvenement().then(
          () => {
            this.loading = false;
            this.toastService.show('Evenement','Suppression evenement réussi !');
            console.log('Suppression evenement reussi !')
          }
        ).catch(
          (error) => {
            this.loading = false;
            console.log(error);
          }
        );
      }
    ).catch(
      (error) => {
        console.log('Erreur suppresion evenement component : ', error)
      }
    )
  }

  voirEvenement(evenement: Post){
    this.router.navigate(['evenement/'+evenement._id]);
  }

  participerEvenement(index: number){
    this.loading = true;
  console.log('user id : ',this.authService.user._id);
    console.log('tab evenement : ',this.postService.tableauEvenement);
    if (this.userParticipeDeja(index)){
      return false
    }
    else if ( this.postService.tableauEvenement[index].nbreMaxParticipant === this.postService.tableauEvenement[index].users.length ){
      return false
    }
    else {

      this.postService.tableauEvenement[index].users.push(this.authService.user)
      console.log(this.postService.tableauEvenement);

      this.postService.modifierEvenement(this.postService.tableauEvenement[index]).then(
        () => {
          this.loading = false;
          this.toastService.show('Evenement','Ajout participation réussi !');
          console.log('Modification Evenement réussi !')
        }
      ).catch(
        (error) => {
          this.loading = false;
          console.log('Erreur modification evenement : ', error)
        }
      )
      return true
    }
  }

  userParticipeDeja(index: number){

    let participeDeja = false;

      this.postService.tableauEvenement[index].users.forEach((user) => {

        if (user._id === this.authService.user._id){
          participeDeja = true;
        }
      })

    return participeDeja

  }

  open() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.titre = 'Veuillez vous connecter';
  }

}
