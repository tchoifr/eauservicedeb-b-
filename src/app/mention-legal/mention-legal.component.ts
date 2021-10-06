import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mention-legal',
  templateUrl: './mention-legal.component.html',
  styleUrls: ['./mention-legal.component.css']
})
export class MentionLegalComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Mentions légales");
    this.meta.updateTag({ name: 'description', content: 'Mentions légales. La plupart des lois et réglementations mondiales en matière de télécommunications exigent que les sites Web qui n\'ont pas une utilité strictement privée ou de nature personnelle doivent avoir des mentions légales conformes. Ceci est valable également pour les sites contenant un blog ou des textes de nature journalistique. . Le nom de la personne responsable de la publication doit' });
    this.meta.updateTag({ name: 'keywords', content: 'mentions legales eauservicedebebe' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, archive' });
    this.meta.updateTag({ name: 'google-site-verification', content: 'Zbq4vFbFiqG3IJoxGkaeVXOMKaNZZNvqM4aYWl1MLlk' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: 'Mentions légales | Eauservicedebebe' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Eauservicedebebe' });
    this.meta.updateTag({ property: 'og:description', content: 'Mentions légales. La plupart des lois et réglementations mondiales en matière de télécommunications exigent que les sites Web qui n\'ont pas une utilité strictement privée ou de nature personnelle doivent avoir des mentions légales conformes. Ceci est valable également pour les sites contenant un blog ou des textes de nature journalistique. . Le nom de la personne responsable de la publication doit' });
    this.meta.updateTag({ property: 'og:image', content: 'https://jimdo-storage.freetls.fastly.net/image/89585226/7ec9ff80-449d-47d5-96a2-3610b01d7a61.jpg?format=pjpg&quality=80&auto=webp&disable=upscale&width=1200&height=630&crop=1:0.525' });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    
  }

}
