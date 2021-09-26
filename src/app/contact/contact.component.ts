import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import {AuthService} from "../service/auth.service";
import {ToastService} from "../service/toast.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formSubmit : boolean = false;
  emailEnvoyer: string = 'En attente';

  images = [
    "../../../assets/avis/avis1.png",
    "../../../assets/avis/avis2.png",
    "../../../assets/avis/avis3.png",
    "../../../assets/avis/avis4.png",
    "../../../assets/avis/avis5.png",
    "../../../assets/avis/avis6.png",

];

submitted: boolean = false;

public form: FormGroup;

  constructor(private meta:Meta, private titleService:Title, private toastService: ToastService, private authService: AuthService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      tel: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      message: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      copieEmail: [false],

    })

   }

  ngOnInit(): void {

    this.titleService.setTitle("Contact EauServiceDeBébé");
    this.meta.updateTag({ name: 'description', content: 'Page contact eauservicedebébé' });
    this.meta.updateTag({ name: 'keywords', content: 'page contact eauservicedebébé' });

  }

  submit(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.formSubmit = true;
      let from = this.form.value['email'];
      let to = 'traineart.13@gmail.com';
      let subject = 'Formulaire Contact Eau service de bebe envoyé par : ' + this.form.value['email'];
      let text = `Nom : ` + this.form.value['nom'] + `<br> Email : ` + this.form.value['email'] + `<br> Numéro de téléphone : ` + this.form.value['tel'] + `<br> Message : ` + this.form.value['message'];
      let copie = this.form.value['copieEmail'];


      this.authService.envoieMail(to, subject, text, copie).then(
        (response: any) => {
          console.log(response)
          this.emailEnvoyer = response.message;
          this.toastService.show('Email','Envoie email réussi !', 'toast-success');
        }
      ).catch(
        (error) => {
          this.toastService.show('Email','Erreur envoie du mail !', 'toast-danger');
          console.log('erreur envoie mail : ', error)
        }
      )

      if (copie){
        this.authService.envoieMail(from, subject, text, copie).then(
          () => {
            // this.formSubmit = true;
            // this.toastService.show('Email','Envoie email réussi !', 'toast-success');
          }
        ).catch(
          (error) => {
            console.log('erreur envoie mail copie : ', error)
          }
        )
      }


        console.log('form value: ', this.form.value);
        // console.log('message: ', this.form.value['message']);
    } else {
        console.log('Error: Form invalid');
    }
  }

}
