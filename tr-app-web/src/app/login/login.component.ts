import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:  any = {};
  constructor(private router: Router) { }

  ngOnInit(): void {


  }

  loginUser(){
    this.router.navigate(["play-game"]);
  }

}
