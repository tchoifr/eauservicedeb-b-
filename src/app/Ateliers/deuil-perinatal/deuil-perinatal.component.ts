import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deuil-perinatal',
  templateUrl: './deuil-perinatal.component.html',
  styleUrls: ['./deuil-perinatal.component.css']
})
export class DeuilPerinatalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
