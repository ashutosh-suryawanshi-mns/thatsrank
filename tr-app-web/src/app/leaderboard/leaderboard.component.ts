import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tr-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leaderboardList = [
    {userName: 'Faheem', rank:200},
    {userName: 'Ramesh', rank:190},
    {userName: 'Jack', rank:175},
    {userName: 'Ashutosh', rank:170},
    {userName: 'Joe', rank:160},
    {userName: 'Bez', rank:152},
    {userName: 'Taylar', rank:137}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
