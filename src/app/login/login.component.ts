import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../../models/user";
import {ToastService} from "../service/toast.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  public form: FormGroup;
  erreur: string = '';
  loading: boolean = false;

  @Input() titre! : string;

  constructor( private formBuilder: FormBuilder, private authService: AuthService, private router: Router, public activeModal: NgbActiveModal, private toastService: ToastService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {



  }

  get input() { return this.form.get('email'); }


  close(){
    this.activeModal.close('Close click');
  }


  submit(): void {

    this.erreur = '';
    this.submitted = true;

    if (this.form.valid) {
      this.loading = true;
      let user: User = {
        _id:'',
        email: this.form.value['email'],
        password: this.form.value['password']

      }
      this.authService.login(user).then(
        () => {
          this.toastService.show('Connexion','Connexion réussi !', 'toast-success');
          this.loading = false;
          this.close();
          console.log('Connexion réussi ! user : ', this.authService.user)
        }
      ).catch(
        (error) => {
          this.loading = false;
          this.toastService.show('Connexion','Erreur !', 'toast-danger');
          this.erreur = error.error.error;
          console.log('error login component ', error)
        }
      )
      // if (loginOk.authentifier) {
      //   alert('connexion reussi');
      //   this.close();
      //   // this.router.navigate(['accueil'])
      // } else {
      //   console.log(loginOk)
      //
      //   if (!loginOk.email) { this.erreurEmail = "L'email n'existe pas" }
      //   if (!loginOk.mdp) { this.erreurMdp = "Le mot de passe associé à ce compte n'est pas correct"  }
      //
      //   this.erreur = true
      //   // alert('erreur');
      // }

      console.log('form value: ', this.form.value);
      console.log('message: ', this.form.value['message']);

    } else {
      console.log('Error: Form invalid');
    }
  }

}
