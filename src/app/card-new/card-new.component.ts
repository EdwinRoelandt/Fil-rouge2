import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.css']
})
export class CardNewComponent implements OnInit {

  newCard: any;

  constructor(
    private Card: CardService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newCard = {
      title: null,
      affiche: null,
      onAir: null,
      synopsis: null,
      set: null,
      date: null
    };
  }


  onSaveCard () {
    // console.log("New card", this.newCard);    
    this.Card.addCard (this.newCard);
    this.router.navigate (['/cards']);
  }

}

