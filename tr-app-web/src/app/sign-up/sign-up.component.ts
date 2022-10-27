import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user:  any = {};
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  saveUser(){
    this.user.location = "Waterside";
    localStorage.setItem("user", JSON.stringify(this.user));
    this.router.navigate(["login"]);
  }

}
