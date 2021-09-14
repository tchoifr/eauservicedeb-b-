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

  @Input() titre! : string;

  constructor( private formBuilder: FormBuilder, private authService: AuthService, private router: Router, public activeModal: NgbActiveModal) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      mdp: ['', Validators.required],
    })
  }

  ngOnInit(): void {



  }

  submit(): void {
    this.submitted = true;

    if (this.form.valid) {
      if (this.authService.login(this.form.value['email'], this.form.value['mdp'])) {
        alert('connexion reussi');
        // this.router.navigate(['accueil'])
      } else {
        alert('erreur');
      }
      console.log('form value: ', this.form.value);
      console.log('message: ', this.form.value['message']);
    } else {
      console.log('Error: Form invalid');
    }
  }

}
