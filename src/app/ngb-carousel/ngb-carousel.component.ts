import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngb-carousel',
  templateUrl: './ngb-carousel.component.html',
  styleUrls: ['./ngb-carousel.component.css']
})
export class NgbCarouselComponent implements OnInit {

  @Input() images: string[] = [];
  @Input() titre: boolean = true;
  @Input() pack: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
