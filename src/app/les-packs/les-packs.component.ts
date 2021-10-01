import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-les-packs',
  templateUrl: './les-packs.component.html',
  styleUrls: ['./les-packs.component.css']
})
export class LesPacksComponent implements OnInit {
  
  constructor(private meta: Meta, private titleService: Title) {
  }
  

  ngOnInit(): void {
    this.titleService.setTitle("Les packs");
    this.meta.updateTag({ name: 'description', content: 'Les pack et info sur les tarifs ' });
    this.meta.updateTag({ name: 'keywords', content: 'Aide deuil périnatal, Deuil bébé' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, archive' });
    this.meta.updateTag({ name: 'google-site-verification', content: 'U3tnE2D2DfyQyskqFYQRSYGAGT_1FPVXTg-u6cdVHbo' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Les Packs | Eauservicedebebe' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Eauservicedebebe' });
    this.meta.updateTag({ property: 'og:description', content: 'Les pack et info sur les tarifs ' });
    this.meta.updateTag({ property: 'og:image', content: 'https://jimdo-storage.freetls.fastly.net/image/89585226/7ec9ff80-449d-47d5-96a2-3610b01d7a61.jpg?format=pjpg&quality=80&auto=webp&disable=upscale&width=1200&height=630&crop=1:0.525' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
  }


}
