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
    this.meta.updateTag({ name: 'description', content: 'Préparer L\'arriver de bébé' });
    this.meta.updateTag({ name: 'keywords', content: 'suivi arriver bébé,aide arriver bébé,préparation a l\'arriver de bebe' });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
