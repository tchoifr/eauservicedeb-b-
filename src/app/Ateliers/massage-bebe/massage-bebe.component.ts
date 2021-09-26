import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-massage-bebe',
  templateUrl: './massage-bebe.component.html',
  styleUrls: ['./massage-bebe.component.css']
})
export class MassageBebeComponent implements OnInit {

  constructor(private meta:Meta, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Massage bébé");
    this.meta.updateTag({ name: 'description', content: 'Massage bébé a domicile' });
    this.meta.updateTag({ name: 'keywords', content: 'Massage bébé a domicile, massage bébé Gardanne,' });
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
