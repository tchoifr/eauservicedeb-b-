import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thalasso',
  templateUrl: './thalasso.component.html',
  styleUrls: ['./thalasso.component.css']
})
export class ThalassoComponent implements OnInit {

  images = [
    "../../../assets/carousel/photocarousel1.jpg",
    "../../../assets/carousel/photocarousel2.jpg",
    "../../../assets/carousel/photocarousel3.jpg",
    "../../../assets/carousel/photocarousel4.jpg",
    "../../../assets/carousel/photocarousel5.jpg",
    "../../../assets/carousel/photocarousel6.jpg",
    "../../../assets/carousel/photocarousel7.jpg",
    "../../../assets/carousel/photocarousel8.jpg",
    "../../../assets/carousel/photocarousel9.jpg",
    "../../../assets/carousel/photocarousel10.jpg",
    "../../../assets/carousel/photocarousel11.jpg",
    "../../../assets/carousel/photocarousel12.jpg",
    "../../../assets/carousel/photocarousel13.jpg",
    "../../../assets/carousel/photocarousel14.jpg",
    "../../../assets/carousel/photocarousel15.jpg",
    "../../../assets/carousel/photocarousel16.jpg",
    "../../../assets/carousel/photocarousel17.jpg",
    "../../../assets/carousel/photocarousel18.jpg",
    "../../../assets/carousel/photocarousel19.jpg",
    "../../../assets/carousel/photocarousel20.jpg",
    "../../../assets/carousel/photocarousel21.jpg",
];

  constructor() { }

  ngOnInit(): void {
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
}
