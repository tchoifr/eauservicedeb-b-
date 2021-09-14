import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../service/post.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-formulaire-evenement',
  templateUrl: './formulaire-evenement.component.html',
  styleUrls: ['./formulaire-evenement.component.css']
})
export class FormulaireEvenementComponent implements OnInit {

  submitted: boolean = false;
tableauEvenement : string[]
public form: FormGroup;

  constructor( private formBuilder: FormBuilder,private postService: PostService, private router: Router) {
    this.form = this.formBuilder.group({
      id: this.postService.tableauEvenement.length + 1,
      titre: ['', Validators.required],
      message: ['', Validators.required],
      compteur: 0,
      idUser: [[]]

    })
this.tableauEvenement = [];
   }

  ngOnInit(): void {



  }

  submit(): void {
    this.submitted = true;

    if (this.form.valid) {
     // this.tableauEvenement.push(this.form.value);
     this.postService.tableauEvenement.push(this.form.value);
     console.log(this.postService.tableauEvenement)
        console.log('form value: ', this.form.value);
        console.log('message: ', this.form.value['message']);
        this.router.navigate(['evenement']);
    } else {
        console.log('Error: Form invalid');
    }
  }


}
