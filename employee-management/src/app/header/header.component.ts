import { Component, OnInit } from '@angular/core';
import {LogoutComponent} from "../logout/logout.component";
import {LoginComponent} from "../login/login.component";
import {AuthenticationService} from "../service/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private loginService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}