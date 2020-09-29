import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoCoin } from '../models/crypto-coin';
import { CoingeckoConsumerService } from '../services/coingecko-consumer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  bitcoin$: CryptoCoin;
  constructor(private coinProvider: CoingeckoConsumerService) {}

  async ngOnInit(){
    let d = await this.changeFiat();
    this.bitcoin$ = d[0];
    console.log('bit', this.bitcoin$);
  }

  changeFiat(){
    return this.coinProvider.getCoinInfo('usd', 'bitcoin').toPromise();
  }


}
