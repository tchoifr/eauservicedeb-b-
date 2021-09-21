import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eauservicedebebe';

  constructor(private meta: Meta) {
    // this.meta.addTag({ name: 'viewport', content: 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes' });
  }



}


