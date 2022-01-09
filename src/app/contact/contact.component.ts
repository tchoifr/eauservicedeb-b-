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
    "../../../assets/avis/avis1.jpg",
    "../../../assets/avis/avis2.jpg",
    "../../../assets/avis/avis3.jpg",
    "../../../assets/avis/avis4.jpg",
    "../../../assets/avis/avis5.jpg",
    "../../../assets/avis/avis6.jpg",
    "../../../assets/avis/avis7.jpg",
    "../../../assets/avis/avis8.jpg",
    "../../../assets/avis/avis9.jpg",
    "../../../assets/avis/avis10.jpg",
    "../../../assets/avis/avis11.jpg",


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

    this.titleService.setTitle("Contact ");
    this.meta.updateTag({ name: 'description', content: 'Vos avis' });
    this.meta.updateTag({ name: 'keywords', content: 'page contact eauservicedebébé' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, archive' });
    this.meta.updateTag({ name: 'google-site-verification', content: 'Zbq4vFbFiqG3IJoxGkaeVXOMKaNZZNvqM4aYWl1MLlk' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Contact / Avis | Eauservicedebebe' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Eauservicedebébé' });
    this.meta.updateTag({ property: 'og:description', content: 'Vos avis' });
    this.meta.updateTag({ property: 'og:image', content: 'https://jimdo-storage.freetls.fastly.net/image/89585226/7ec9ff80-449d-47d5-96a2-3610b01d7a61.jpg?format=pjpg&quality=80&auto=webp&disable=upscale&width=1200&height=630&crop=1:0.525' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });

  }

  submit(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.formSubmit = true;
      let from = this.form.value['email'];
      let to = 'Eauservicedebebe@gmail.com';
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
