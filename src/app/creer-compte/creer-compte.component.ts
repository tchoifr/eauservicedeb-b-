import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user";
import {ToastService} from "../service/toast.service";
import { Meta, Title } from '@angular/platform-browser';

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


  constructor(private meta: Meta, private titleService: Title, private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private toastService: ToastService) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      numero: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    })
  }

  ngOnInit(): void {
    this.titleService.setTitle("Creer un compte");
    this.meta.updateTag({ name: 'description', content: 'Creer son compte sur eauservicedebebe' });
    this.meta.updateTag({ name: 'keywords', content: 'compte eauservicedebebe' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, archive' });
    this.meta.updateTag({ name: 'google-site-verification', content: 'Zbq4vFbFiqG3IJoxGkaeVXOMKaNZZNvqM4aYWl1MLlk' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Creer son compte | Eauservicedebebe' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Eauservicedebébé' });
    this.meta.updateTag({ property: 'og:description', content: 'Creer son compte sur eauservicedebebe' });
    this.meta.updateTag({ property: 'og:image', content: 'https://jimdo-storage.freetls.fastly.net/image/89585226/7ec9ff80-449d-47d5-96a2-3610b01d7a61.jpg?format=pjpg&quality=80&auto=webp&disable=upscale&width=1200&height=630&crop=1:0.525' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
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
        numero: this.form.value['numero']
      }
       this.authService.creerUtilisateur(user).then(
         () => {
           this.loading = false;
           this.toastService.show('Connexion','Connexion réussi !', 'toast-success');
           console.log('Utilisateur creer ! : ', this.authService.user);
           this.router.navigate(['accueil'])
         }
       ).catch(
         (error) => {
           this.loading = false;
           this.toastService.show('Connexion','Erreur !', 'toast-danger');
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
      console.log(this.form)
      this.loading = false;
      console.log('Error: Form invalid');
    }
  }

}
