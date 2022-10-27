import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tr-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  selectedBUs: string[] = ["womenswear","menswear"];
  constructor(private router: Router) { }

  decodedUserData;
  username;

  ngOnInit(): void {
    this.decodedUserData = JSON.parse(localStorage.getItem("user"));
    if(localStorage.getItem("selectedBUs")){
      let sbus =  localStorage.getItem("selectedBUs");
      this.selectedBUs = JSON.parse(sbus)
    }
  }

  selectBU(BUType: any) {
    let isBUSelected: any = this.selectedBUs.includes(BUType);
    if(!isBUSelected){
      this.selectedBUs.push(BUType);
    }
    else{
      let indx = this.selectedBUs.indexOf(BUType);
      this.selectedBUs.splice(indx, 1)
    }
  }

  playGame(){
    localStorage.setItem("selectedBUs", JSON.stringify(this.selectedBUs));
    this.router.navigate(['/play-game']);
  }

}
