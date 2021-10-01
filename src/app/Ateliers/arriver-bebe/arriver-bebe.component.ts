import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-arriver-bebe',
  templateUrl: './arriver-bebe.component.html',
  styleUrls: ['./arriver-bebe.component.css']
})
export class ArriverBebeComponent implements OnInit {

  constructor(private meta:Meta,private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Préparer l\'arriver de bébé");

    this.meta.updateTag({ name: 'keywords', content: 'suivi arriver bébé,aide arriver bébé,préparation a l\'arriver de bebe' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, archive' });
    this.meta.updateTag({ name: 'description', content: 'Préparer l\'arrivée de bébé. . Vous attendez un bébé et vous ne savez pas par où commencer ? Quelles démarches administratives effectuées ? Quand faire votre liste de naissance ? Que doit-elle contenir ? Quels produits allez-vous utiliser pour bébé, quelles marques de couches, quels sièges auto, quelles poussettes…? La valise de maternité ? Allaitement ou biberon ? Quel lait ? Les premiers soins de' });
    this.meta.updateTag({ name: 'google-site-verification', content: 'U3tnE2D2DfyQyskqFYQRSYGAGT_1FPVXTg-u6cdVHbo' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Préparer l\'arrivée de bébé - Ateliers | Eauservicedebebe' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Eauservicedebébé' });
    this.meta.updateTag({ property: 'og:description', content: 'Préparer l\'arrivée de bébé. . Vous attendez un bébé et vous ne savez pas par où commencer ? Quelles démarches administratives effectuées ? Quand faire votre liste de naissance ? Que doit-elle contenir ? Quels produits allez-vous utiliser pour bébé, quelles marques de couches, quels sièges auto, quelles poussettes…? La valise de maternité ? Allaitement ou biberon ? Quel lait ? Les premiers soins de' });
    this.meta.updateTag({ property: 'og:image', content: 'https://jimdo-storage.freetls.fastly.net/image/89585226/7ec9ff80-449d-47d5-96a2-3610b01d7a61.jpg?format=pjpg&quality=80&auto=webp&disable=upscale&width=1200&height=630&crop=1:0.525' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
