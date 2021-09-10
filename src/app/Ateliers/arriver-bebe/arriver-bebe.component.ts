import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arriver-bebe',
  templateUrl: './arriver-bebe.component.html',
  styleUrls: ['./arriver-bebe.component.css']
})
export class ArriverBebeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
