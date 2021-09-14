import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  public form: FormGroup;
  erreur: boolean = false;
  erreurEmail: string = '';
  erreurMdp: string = '';

  @Input() titre! : string;

  constructor( private formBuilder: FormBuilder, private authService: AuthService, private router: Router, public activeModal: NgbActiveModal) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      mdp: ['', Validators.required],
    })
  }

  ngOnInit(): void {



  }

  close(){
    this.activeModal.close('Close click');
  }

  submit(): void {
    this.submitted = true;
    this.erreurEmail = '';
    this.erreurMdp = '';

    if (this.form.valid) {
      const loginOk = this.authService.login(this.form.value['email'], this.form.value['mdp'])
      if (loginOk.authentifier) {
        alert('connexion reussi');
        this.close();
        // this.router.navigate(['accueil'])
      } else {
        console.log(loginOk)

        if (!loginOk.email) { this.erreurEmail = "L'email n'existe pas" }
        if (!loginOk.mdp) { this.erreurMdp = "Le mot de passe associé à ce compte n'est pas correct"  }

        this.erreur = true
        // alert('erreur');
      }

      console.log('form value: ', this.form.value);
      console.log('message: ', this.form.value['message']);
    } else {
      console.log('Error: Form invalid');
    }
  }

}
