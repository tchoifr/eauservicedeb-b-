import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarCollapsed = true;
  scrollNav = false; 
  classColapse = '';
  constructor() { }

  ngOnInit(): void {
  }
@ViewChild('navbar',{static:false}) public navbar: ElementRef | undefined  
  @HostListener('window:scroll',[])
  onWindowScroll(){
    // console.log(window.scrollY);
    if (window.scrollY > 100 ){
      this.scrollNav = true;

    }
    else{
      this.scrollNav = false;
    }

   
  }
  collapse(){
    
    return this.navbarCollapsed = !this.navbarCollapsed
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
