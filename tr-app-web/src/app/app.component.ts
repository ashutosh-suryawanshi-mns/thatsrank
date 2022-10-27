import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routPath = ''
  constructor(public router: Router) {

  }

  ngOnInit() {
    console.log(this.router.url)
    console.log(this.router.url.includes('singup'))

    this.router.events.subscribe((e: any) => {
    if(e.url){
      this.routPath = e.url
    }
    })
  }

  title = 'thats-rank';

  srcImgLeaderboard = 'assets/img/bottom-nav/leaderboard.svg';
  srcImgGame = 'assets/img/bottom-nav/game.svg';
  srcImgProfile = 'assets/img/bottom-nav/profile.svg';
}
