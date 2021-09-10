import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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

  constructor( private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      tel: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      message: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],

    })

   }

  ngOnInit(): void {

    

  }

  submit(): void {
    this.submitted = true;

    if (this.form.valid) {
        console.log('form value: ', this.form.value);
        console.log('message: ', this.form.value['message']);
    } else {
        console.log('Error: Form invalid');
    }
  }

}
