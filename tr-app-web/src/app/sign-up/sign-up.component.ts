import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user:  any = {};
  constructor() { }

  ngOnInit(): void {


  }

  saveUser(){

  }

}
