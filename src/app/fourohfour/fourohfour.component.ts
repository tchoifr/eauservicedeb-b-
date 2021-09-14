import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-fourohfour',
  templateUrl: './fourohfour.component.html',
  styleUrls: ['./fourohfour.component.css']
})
export class FourohfourComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.user)
  }

}
