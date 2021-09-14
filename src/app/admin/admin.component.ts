import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users! : User[];

  constructor(public authService: AuthService) { }

  ngOnInit(): void {

    this.users = this.authService.getAllUsers();

  }

}
