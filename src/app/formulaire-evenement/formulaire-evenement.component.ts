import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../service/post.service';
import {Router} from "@angular/router";
import {Post} from "../../models/post";

@Component({
  selector: 'app-formulaire-evenement',
  templateUrl: './formulaire-evenement.component.html',
  styleUrls: ['./formulaire-evenement.component.css']
})
export class FormulaireEvenementComponent implements OnInit {

  submitted: boolean = false;
public form: FormGroup;
  public imagePreview: any = '';
  loading: boolean = false;
  erreur: string = '';


  constructor( private formBuilder: FormBuilder,private postService: PostService, private router: Router) {
    this.form = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      compteur: 0,
      idUser: [[]],
      image: [null, Validators.required],
      nbreMaxParticipant: ['', Validators.required]
    })
   }

  ngOnInit(): void {

  }


  onImagePick(event: Event) {


    const file = (event.target as HTMLInputElement).files![0];

    this.form.get('image')!.patchValue(file);
    this.form.get('image')!.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      if (this.form.get('image')!.valid) {
        this.imagePreview = reader.result as string;
      } else {
        this.imagePreview = null;
      }
    };
    reader.readAsDataURL(file);
  }



  submit(): void {
    this.submitted = true;
console.log(this.form.controls);

    if (this.form.valid) {
      this.loading = true;
      let evenement = new Post('',this.form.value['titre'], this.form.value['description'],[], new Date(),this.form.value['nbreMaxParticipant'])
     // this.tableauEvenement.push(this.form.value);

      this.postService.ajouterEvenement(evenement, this.form.get('image')!.value).then(
        () => {

          this.router.navigate(['evenement'])
          this.loading = false;
          console.log('Ajout evenement reussi !');
        }
      ).catch(
        (error) => {
          this.loading = false;
          console.log('Erreur ajout evenement : ', error)


        }
      )
     // this.postService.tableauEvenement.push(this.form.value);
     console.log(this.postService.tableauEvenement)
        console.log('form : ', this.form);
        // this.router.navigate(['evenement']);
    } else {
        console.log('Error: Form invalid', this.form);
    }
  }


}
