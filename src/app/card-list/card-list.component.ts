import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit, OnDestroy {

  cards: any = [];
  cardSubscription: Subscription;
  
  constructor (
    private Card: CardService
  ) {}

  ngOnInit () {
    this.cardSubscription = this.Card.cardSubject.subscribe ( (value) => {
      console.log(value)
      this.cards = value
    });
    this.Card.emitCardSubject();
  }

  ngOnDestroy() {
    this.cardSubscription.unsubscribe();
  }
}
