import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";

@Component({
  selector: 'app-creer-compte',
  templateUrl: './creer-compte.component.html',
  styleUrls: ['./creer-compte.component.css']
})
export class CreerCompteComponent implements OnInit {
  submitted: boolean = false;
  public form: FormGroup;
  erreur: String = ''
  loading: boolean = false;


  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.erreur = '';
    this.loading = true;
    this.submitted = true;


    if (this.form.valid) {
      let user : User = {
        _id:'',
        email: this.form.value['email'],
        password: this.form.value['password'],
        nom: this.form.value['nom'],
        prenom: this.form.value['prenom'],
        adresse: this.form.value['adresse'],
      }
       this.authService.creerUtilisateur(user).then(
         () => {
           this.loading = false;
           console.log('Utilisateur creer ! : ', this.authService.user);
           this.router.navigate(['accueil'])
         }
       ).catch(
         (error) => {
           this.loading = false;
           this.erreur = error.error.error.message;
           console.log(this.erreur);
           console.log(error);
         }
       )
       ;

        //alert('connexion reussi');
         //this.router.navigate(['accueil'])

        //this.erreur = true
        // alert('erreur');


      console.log('form value: ', this.form.value);
    } else {
      console.log('Error: Form invalid');
    }
  }

}
