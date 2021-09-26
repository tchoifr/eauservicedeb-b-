import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-deuil-perinatal',
  templateUrl: './deuil-perinatal.component.html',
  styleUrls: ['./deuil-perinatal.component.css']
})
export class DeuilPerinatalComponent implements OnInit {

  constructor(private meta:Meta,private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle("Deuil périnatal");
    this.meta.updateTag({ name: 'description', content: 'Deuil périnatal' });
    this.meta.updateTag({ name: 'keywords', content: 'Aide deuil périnatal, Deuil bébé' });
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
