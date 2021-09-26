import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-allaitement',
  templateUrl: './allaitement.component.html',
  styleUrls: ['./allaitement.component.css']
})
export class AllaitementComponent implements OnInit {

  constructor(private meta:Meta,private titleService:Title) {
    
  }

  ngOnInit(): void {
    this.titleService.setTitle("Accueil eauservicedebébé");
    this.meta.updateTag({ name: 'description', content: 'EauServiceDeBébé vous accompagne dans L\'allaitement.' });
    this.meta.updateTag({ name: 'keywords', content: 'suivi allaitement gardanne,aide a l\'allaitement marseille' });
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
