import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-politique-de-confidentialite',
  templateUrl: './politique-de-confidentialite.component.html',
  styleUrls: ['./politique-de-confidentialite.component.css']
})
export class PolitiqueDeConfidentialiteComponent implements OnInit {

  constructor(private meta: Meta, private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Politique de confidentialiter");
    this.meta.updateTag({ name: 'description', content: 'Politique de confidentialité. Avis important sur le traitement des données en relation avec Google Analytics. Ce site utilise Google Analytics, un service d’analyse web fourni par Google Ireland Limited. Si l’organe responsable pour le traitement des données récoltées via ce site est basé hors de l’Espace économique européen et de la Suisse, alors le traitement des données associées à Google Analytics' });
    this.meta.updateTag({ name: 'keywords', content: 'Politique de confidentialiter eauservicedebebe' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, archive' });
    this.meta.updateTag({ name: 'google-site-verification', content: 'a definir' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'politique de confidentialiter | Eauservicedebebe' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Eauservicedebebe' });
    this.meta.updateTag({ property: 'og:description', content: 'Politique de confidentialité. Avis important sur le traitement des données en relation avec Google Analytics. Ce site utilise Google Analytics, un service d’analyse web fourni par Google Ireland Limited. Si l’organe responsable pour le traitement des données récoltées via ce site est basé hors de l’Espace économique européen et de la Suisse, alors le traitement des données associées à Google Analytics' });
    this.meta.updateTag({ property: 'og:image', content: 'https://jimdo-storage.freetls.fastly.net/image/89585226/7ec9ff80-449d-47d5-96a2-3610b01d7a61.jpg?format=pjpg&quality=80&auto=webp&disable=upscale&width=1200&height=630&crop=1:0.525' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
  }

}
