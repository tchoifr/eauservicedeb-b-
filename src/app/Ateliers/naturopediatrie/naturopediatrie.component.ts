import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naturopediatrie',
  templateUrl: './naturopediatrie.component.html',
  styleUrls: ['./naturopediatrie.component.css']
})
export class NaturopediatrieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
