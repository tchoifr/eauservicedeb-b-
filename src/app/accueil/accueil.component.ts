import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  constructor(private meta: Meta,private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Accueil");
    this.meta.updateTag({ name: 'robots', content: 'index, follow, archive' });
    this.meta.updateTag({ name: 'description', content: 'EauServiceDeBébé vous accompagne de la Naturopédiatrie au deuil périnatal.' });
    this.meta.updateTag({ name: 'keywords', content: 'Thalasso bain bébé, Massage bébé, Allaitement, aide Allaitement, Périnatalité, aide perinatal, Sommeil bébé, Massage postnatal, Grossesse, Bébé, bain bebe Gardanne' });
    this.meta.updateTag({ name: 'google-site-verification', content: 'Zbq4vFbFiqG3IJoxGkaeVXOMKaNZZNvqM4aYWl1MLlk' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  
    

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Accompagnement périnatal, bien être parents/bébé | Eauservicedebebe' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Eauservicedebébé' });
    this.meta.updateTag({ property: 'og:description', content: 'Quand la magie opère ...' });
    this.meta.updateTag({ property: 'og:image', content: 'https://jimdo-storage.freetls.fastly.net/image/89585226/7ec9ff80-449d-47d5-96a2-3610b01d7a61.jpg?format=pjpg&quality=80&auto=webp&disable=upscale&width=1200&height=630&crop=1:0.525' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    
  }

}


