import {Component, Input, OnInit} from '@angular/core';
import { PostService } from '../service/post.service';
import {AuthService} from "../service/auth.service";
import {LoginComponent} from "../login/login.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {


  constructor(public postService: PostService, public authService: AuthService, private modalService: NgbModal, private router: Router)  { }


  ngOnInit(): void {
    this.postService.tableauEvenement.sort((a,b) => b.id - a.id);
  }

  supprimerParticipation(index: number){
    const userId = this.authService.user.id;
    this.postService.tableauEvenement[index].idUser.forEach((id,i)=>{
      if (id === userId) {
        console.log(i);
        this.postService.tableauEvenement[index].idUser.splice(i,1);
      }
    })
    console.log(this.postService.tableauEvenement[index].idUser)

  }

  supprimerEvenement(index: number){
    this.postService.tableauEvenement.splice(index,1);
  }

  voirEvenement(index: number){
    this.router.navigate(['evenement/'+index]);
  }

  participerEvenement(index: number){
  console.log('user id : ',this.authService.user.id);
    console.log('tab evenement : ',this.postService.tableauEvenement);
    if (this.userParticipeDeja(index)){
      return false
    }
    else {
      this.postService.tableauEvenement[index].idUser.push(this.authService.user.id)
      this.postService.tableauEvenement[index].compteur++;
      return true
    }
  }

  userParticipeDeja(index: number){
    return this.postService.tableauEvenement[index].idUser.includes(this.authService.user.id);
  }

  open() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.titre = 'Veuillez vous connecter';
  }

}
