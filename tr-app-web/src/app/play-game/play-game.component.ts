import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'tr-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})
export class PlayGameComponent implements OnInit {

  showWelcomModal = true;
  showHoorayModal = false;
  showWellDoneModal = false;
  show100Modal = false;

  productDetails = [
    // { imgPath: 'assets/img/tmp/dress.svg', productName: 'Star paints V-neck tea dress' },
  ];

  starRating = 0;

  prdIndx = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.apiService.getAllProducts().subscribe((response: any) => {
      console.log(response);
      this.productDetails = response;
    })
  }

  rateChange(eve) {

    setTimeout(() => {

      let requestBody = {
        "ranking": {
          "ranking_id": 4,
          "player_id": 2,
          "product_id": this.productDetails[this.prdIndx].PRODUCT_ID,
          "attribute_id": 1,
          "ranking_method": "stars",
          "ranking_value": this.starRating
        }
      };
  
      this.apiService.addRanking(requestBody).subscribe((response: any) => {
        console.log("Response: ", response);
      });

      if (this.prdIndx == 5) {
        this.showHoorayModal = true;
      }
      if (this.prdIndx == 7) {
        this.show100Modal = true;
      }

      this.starRating = 0;
      this.prdIndx += 1;
    }, 1000)
  }

  // hideWelcomeModal(){
  //   this.showWelcomModal = false;
  // }


}
