import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-naturopediatrie',
  templateUrl: './naturopediatrie.component.html',
  styleUrls: ['./naturopediatrie.component.css']
})
export class NaturopediatrieComponent implements OnInit {

  constructor(private meta:Meta, private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Naturopediatrie");
    this.meta.updateTag({ name: 'description', content: 'Naturopédiatrie. L\'accompagnement par la naturopédiatrie vous guide et vous conseil sur l\'hygiène vie de votre nouveau né /enfant (sommeil, alimentation, choix du lait ...) et vous accompagne pour soulager les maux du quotidien à l\'aide de méthodes naturelles. Ceci n\'est pas une visite médicale .' });
    this.meta.updateTag({ name: 'keywords', content: 'Naturopediatrie gardanne,Naturopediatrie marseille' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, archive' });
    this.meta.updateTag({ name: 'google-site-verification', content: 'U3tnE2D2DfyQyskqFYQRSYGAGT_1FPVXTg-u6cdVHbo' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Naturopédiatrie - Ateliers | Eauservicedebebe' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Eauservicedebébé' });
    this.meta.updateTag({ property: 'og:description', content: 'Naturopédiatrie. L\'accompagnement par la naturopédiatrie vous guide et vous conseil sur l\'hygiène vie de votre nouveau né /enfant (sommeil, alimentation, choix du lait ...) et vous accompagne pour soulager les maux du quotidien à l\'aide de méthodes naturelles. Ceci n\'est pas une visite médicale .' });
    this.meta.updateTag({ property: 'og:image', content: 'https://jimdo-storage.freetls.fastly.net/image/89585226/7ec9ff80-449d-47d5-96a2-3610b01d7a61.jpg?format=pjpg&quality=80&auto=webp&disable=upscale&width=1200&height=630&crop=1:0.525' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
