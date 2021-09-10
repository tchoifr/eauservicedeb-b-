import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-massage-bebe',
  templateUrl: './massage-bebe.component.html',
  styleUrls: ['./massage-bebe.component.css']
})
export class MassageBebeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
