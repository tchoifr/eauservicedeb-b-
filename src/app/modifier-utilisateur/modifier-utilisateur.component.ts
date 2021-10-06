import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {User} from "../../models/user";
import {ToastService} from "../service/toast.service";

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.css']
})
export class ModifierUtilisateurComponent implements OnInit {

  submitted: boolean = false;
  public form!: FormGroup;
  erreur: String = ''
  loading: boolean = false;
  utilisateur!: User;

  index: number = this.route.snapshot.params['id'];

  constructor(private toastService: ToastService, private route: ActivatedRoute, private formBuilder: FormBuilder, private userService: UserService, private router: Router) {

  }

 ngOnInit(): void {


 // this.getOneUserByID(this.index);

    this.userService.users.forEach((user) => {

      if (Number(user.id) === Number(this.index)) {

        this.utilisateur = user;
      }
    })
console.log(this.utilisateur)


    this.form = this.formBuilder.group({
      email: [this.utilisateur.email, [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      nom: [this.utilisateur.nom, Validators.required],
      prenom: [this.utilisateur.prenom, Validators.required],
      adresse: [this.utilisateur.adresse, Validators.required],
      admin: [this.utilisateur.isAdmin],
      numero: [this.utilisateur.numero, Validators.pattern('[0-9]{10}')]
    })
  }

  getOneUserByID(id: string){
    this.loading = true;
    this.userService.getUserByID(id).then(
      (response: any)=> {
        this.utilisateur = response;

        this.loading = false;
        console.log('getOneUserByID : ', response)
      }
    ).catch(
      (error) => {
        this.loading = false;
        this.toastService.show('Admin','Erreur !', 'toast-danger');
        this.erreur = error.error.error;
        console.log('erreur getOneUserByID : ', error)
      }

    )
  }

  submit(): void {
    this.erreur = '';
    this.loading = true;
    this.submitted = true;

    console.log(this.form);

    if (this.form.valid) {
      let user : User = {
        id:this.utilisateur.id,
        email: this.form.value['email'],
        nom: this.form.value['nom'],
        prenom: this.form.value['prenom'],
        adresse: this.form.value['adresse'],
        isAdmin: this.form.value['admin'],
        numero: this.form.value['numero']
      }

      this.userService.modifierUser(user).then(
        ()=> {

          this.loading = false;
          this.router.navigate(['admin']);
          this.toastService.show('Admin','Modification utilisateur réussi !', 'toast-success');
          console.log('Modification utilisateur réussi !')
        }
      ).catch(
        (error) => {
          this.loading = false;
          this.toastService.show('Admin','Erreur !', 'toast-danger');
          this.erreur = error.error.error;
          console.log('erreur modif user : ', error)
        }
      )



      console.log('form value: ', this.form.value);
    } else {
      this.loading = false;
      console.log('Error: Form invalid');
    }
  }

}
