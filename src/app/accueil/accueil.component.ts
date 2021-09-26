import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private meta: Meta,private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Accueil eauservicedebébé");
    this.meta.updateTag({ name: 'description', content: 'EauServiceDeBébé vous accompagne de la Naturopédiatrie au deuil périnatal.' });
    this.meta.updateTag({ name: 'keywords', content: 'Thalasso bain bébé,, Massage bébé, Allaitement, aide Allaitement, Périnatalité, aide perinatal, Sommeil bébé, Massage postnatal, Grossesse, Bébé, bain bebe Gardanne' });
  }

}


