import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../service/post.service';
import {Router} from "@angular/router";
import {Post} from "../../models/post";
import {ToastService} from "../service/toast.service";

@Component({
  selector: 'app-formulaire-evenement',
  templateUrl: './formulaire-evenement.component.html',
  styleUrls: ['./formulaire-evenement.component.css']
})
export class FormulaireEvenementComponent implements OnInit {

  submitted: boolean = false;
public form!: FormGroup;
  public imagePreview: any = '';
  loading: boolean = false;
  erreur: string = '';
  @Input() event!: Post;


  constructor( private formBuilder: FormBuilder,private postService: PostService, private router: Router, private toastService: ToastService) {

    // if (!this.event) {
    //   console.log('cree event ', this.event)
    //   this.form = this.formBuilder.group({
    //     titre: ['', Validators.required],
    //     description: ['', Validators.required],
    //     compteur: 0,
    //     idUser: [[]],
    //     image: [null, Validators.required],
    //     nbreMaxParticipant: ['', Validators.required]
    //   })
    // }
    // else {
    //   console.log('modif event ', this.event)
    //   this.form = this.formBuilder.group({
    //     titre: [this.event.title, Validators.required],
    //     description: [this.event.description, Validators.required],
    //     compteur: 0,
    //     idUser: [this.event.users],
    //     image: [this.event.imageUrl, Validators.required],
    //     nbreMaxParticipant: [this.event.nbreMaxParticipant, Validators.required]
    //   })
    // }

   }

  ngOnInit(): void {
    if (!this.event) {
      console.log('cree event ', this.event)
      this.form = this.formBuilder.group({
        titre: ['', Validators.required],
        description: ['', Validators.required],
        compteur: 0,
        idUser: [[]],
        image: [null, Validators.required],
        nbreMaxParticipant: ['', Validators.required]
      })
    }
    else {
      console.log('modif event ', this.event)
      this.form = this.formBuilder.group({
        titre: [this.event.title, Validators.required],
        description: [this.event.description, Validators.required],
        compteur: 0,
        idUser: [this.event.users],
        image: [this.event.imageUrl, Validators.required],
        nbreMaxParticipant: [this.event.nbreMaxParticipant, Validators.required]
      })
    }


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
    this.erreur = '';
console.log(this.form.controls);

    if (this.form.valid && !this.event) {
      this.loading = true;
      let evenement = new Post('',this.form.value['titre'], this.form.value['description'],[], new Date(),this.form.value['nbreMaxParticipant'])
     // this.tableauEvenement.push(this.form.value);

      this.postService.ajouterEvenement(evenement, this.form.get('image')!.value).then(
        () => {

          this.router.navigate(['evenement'])
          this.loading = false;
          this.toastService.show('Evenement','Ajout evenement réussi !', 'toast-success');
          console.log('Ajout evenement reussi !');
        }
      ).catch(
        (error) => {
          this.loading = false;
          this.toastService.show('Evenement','Erreur !', 'toast-danger');
          console.log('Erreur ajout evenement : ', error)


        }
      )
     // this.postService.tableauEvenement.push(this.form.value);
     console.log(this.postService.tableauEvenement)
        console.log('form : ', this.form);
        // this.router.navigate(['evenement']);
    } else if (this.form.valid && this.event) {
      this.loading = true;

      if (this.form.value['nbreMaxParticipant'] < this.event.users.length)
      {
        this.erreur = 'Vous ne pouvez pas réduire le nombre de participant maximal en dessous du nombre actuel de participant'
        console.log('erreur nbremaxparticipant plus petit que le nombre actuel de participant')
        this.loading = false;
      }
      else {


      let evenement = new Post (this.event.id, this.form.value['titre'], this.form.value['description'],this.event.users, this.event.date,this.form.value['nbreMaxParticipant'] )

      this.postService.modifierEvenement(evenement).then(
        () => {
          this.router.navigate(['evenement'])
          this.loading = false;
          this.toastService.show('Evenement','Modif evenement réussi !', 'toast-success');
          console.log('Modif evenement reussi !');
        }
      ).catch (
        (error) => {
          this.loading = false;
          this.toastService.show('Evenement','Erreur !', 'toast-danger');
          console.log('Erreur modif evenement : ', error)
        }
      )
    }

    }
    else {
        console.log('Error: Form invalid', this.form);
    }
  }


}
