import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {UserService} from "../service/user.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loading: boolean = false

  constructor(public authService: AuthService, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getAllUsers().then(
      () => {
        this.loading = false;
        console.log('getAllUsers Reussi')
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
    ;

  }

  modifUser(user: User){
    this.router.navigate(['modifUtilisateur/'+user._id]);
  }

  supprimerUtilisateur(user: User){
    this.loading = true;
    this.userService.deleteUser(user).then(
      () => {
        this.userService.getAllUsers().then(
          () => {
            this.loading = false;
            console.log('Utilisateur supprimé !')
          }
        ).catch(
          (error) => {
            this.loading = false;
            console.log(error)
          }
        )

      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )
  }

}
