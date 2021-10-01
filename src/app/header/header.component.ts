import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarCollapsed = false;
  scrollNav = false;
  classColapse = '';
  constructor(public authService: AuthService, private modalService: NgbModal) { }

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

//   @HostListener('click', ['$event.target'])
//   clickHeader(){
//     console.log('liiik');
//     if (this.navbarCollapsed){
//       this.navbarCollapsed = false;
//     }
//
// }
  collapse(){

    return this.navbarCollapsed = !this.navbarCollapsed
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
  open() {
     const modalRef = this.modalService.open(LoginComponent);

  }

}
