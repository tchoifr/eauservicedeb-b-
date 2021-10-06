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
    this.titleService.setTitle("Allaitement");
    this.meta.updateTag({ name: 'keywords', content: 'suivi allaitement gardanne,aide a l\'allaitement marseille' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, archive' });
    this.meta.updateTag({ name: 'description', content: 'Allaitement. Vous avez choisi d’allaiter votre/vos bébés. Je vous propose des ateliers pour préparer un futur allaitement ou bien un accompagnement personnalisé afin que celles-ci puissent répondre au mieux à vos attentes et vos besoins. Atelier d\'initiation à l\'allaitement maternel 1h : . Notion de base sur l\'allaitement, ce qu\'il faut savoir avant de démarrer un allaitement, matériel utile à l\'a' });
    this.meta.updateTag({ name: 'google-site-verification', content: 'Zbq4vFbFiqG3IJoxGkaeVXOMKaNZZNvqM4aYWl1MLlk' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Allaitement - Ateliers | Eauservicedebebe' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Eauservicedebébé' });
    this.meta.updateTag({ property: 'og:description', content: 'Allaitement. Vous avez choisi d’allaiter votre/vos bébés. Je vous propose des ateliers pour préparer un futur allaitement ou bien un accompagnement personnalisé afin que celles-ci puissent répondre au mieux à vos attentes et vos besoins. Atelier d\'initiation à l\'allaitement maternel 1h : . Notion de base sur l\'allaitement, ce qu\'il faut savoir avant de démarrer un allaitement, matériel utile à l\'a' });
    this.meta.updateTag({ property: 'og:image', content: 'https://jimdo-storage.freetls.fastly.net/image/89585226/7ec9ff80-449d-47d5-96a2-3610b01d7a61.jpg?format=pjpg&quality=80&auto=webp&disable=upscale&width=1200&height=630&crop=1:0.525' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
