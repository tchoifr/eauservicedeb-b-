import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allaitement',
  templateUrl: './allaitement.component.html',
  styleUrls: ['./allaitement.component.css']
})
export class AllaitementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
