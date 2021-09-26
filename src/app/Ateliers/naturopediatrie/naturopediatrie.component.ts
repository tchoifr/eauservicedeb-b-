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
    this.meta.updateTag({ name: 'description', content: 'Naturopediatrie' });
    this.meta.updateTag({ name: 'keywords', content: 'Naturopediatrie gardanne,Naturopediatrie marseille' });
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
