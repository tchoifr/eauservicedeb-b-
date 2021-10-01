import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-thalasso',
  templateUrl: './thalasso.component.html',
  styleUrls: ['./thalasso.component.css']
})
export class ThalassoComponent implements OnInit {

  images = [
    "../../../assets/carousel/photocarousel1.jpg",
    "../../../assets/carousel/photocarousel2.jpg",
    "../../../assets/carousel/photocarousel3.jpg",
    "../../../assets/carousel/photocarousel4.jpg",
    "../../../assets/carousel/photocarousel5.jpg",
    "../../../assets/carousel/photocarousel6.jpg",
    "../../../assets/carousel/photocarousel7.jpg",
    "../../../assets/carousel/photocarousel8.jpg",
    "../../../assets/carousel/photocarousel9.jpg",
    "../../../assets/carousel/photocarousel10.jpg",
    "../../../assets/carousel/photocarousel11.jpg",
    "../../../assets/carousel/photocarousel12.jpg",
    "../../../assets/carousel/photocarousel13.jpg",
    "../../../assets/carousel/photocarousel14.jpg",
    "../../../assets/carousel/photocarousel15.jpg",
    "../../../assets/carousel/photocarousel16.jpg",
    "../../../assets/carousel/photocarousel17.jpg",
    "../../../assets/carousel/photocarousel18.jpg",
    "../../../assets/carousel/photocarousel19.jpg",
    "../../../assets/carousel/photocarousel20.jpg",
    "../../../assets/carousel/photocarousel21.jpg",
];

  constructor(private meta:Meta, private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Thalasso bain bébé");
    this.meta.updateTag({ name: 'keywords', content: ' bain bébé, Thalasso bain bébé Marseille,Thalasso bain bébé Gardanne' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, archive' });
    this.meta.updateTag({ name: 'description', content: 'Thalasso Bain Bébé. . Ce n’est pas un bain « d’hygiène », c’est un « bain soin ». Un bain qui permet au bébé de relâcher ses tensions. Le nouveau-né retrouve ainsi des sensations et des positions qu’il avait dans le ventre de sa mère. Le Thalasso Bain est comme une transition entre la vie intra-utérine et le monde extérieur. Un moment de détente, de sérénité et de bien être pour bébé mais égalemen' });
    this.meta.updateTag({ name: 'google-site-verification', content: 'U3tnE2D2DfyQyskqFYQRSYGAGT_1FPVXTg-u6cdVHbo' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Thalasso Bain bébé - Ateliers | Eauservicedebebe' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Eauservicedebébé' });
    this.meta.updateTag({ property: 'og:description', content: 'Thalasso Bain Bébé. . Ce n’est pas un bain « d’hygiène », c’est un « bain soin ». Un bain qui permet au bébé de relâcher ses tensions. Le nouveau-né retrouve ainsi des sensations et des positions qu’il avait dans le ventre de sa mère. Le Thalasso Bain est comme une transition entre la vie intra-utérine et le monde extérieur. Un moment de détente, de sérénité et de bien être pour bébé mais égalemen' });
    this.meta.updateTag({ property: 'og:image', content: 'https://jimdo-storage.freetls.fastly.net/image/89585226/7ec9ff80-449d-47d5-96a2-3610b01d7a61.jpg?format=pjpg&quality=80&auto=webp&disable=upscale&width=1200&height=630&crop=1:0.525' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
