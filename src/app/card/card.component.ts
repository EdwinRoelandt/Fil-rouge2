import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input ()  cardName: string;
  @Input ()  cardOnSale: string;
  @Input ()  cardAffiche: string;
  @Input ()  synopsis: number;
  @Input ()  set:string;
  @Input ()  date: string;
  @Input ()  id: number;

  constructor(
    private Card: CardService
  ) { }

  ngOnInit() {
  }

  getOnAir() {
    return this.cardOnSale;
  }

  changeColor() {
    if (this.cardOnSale == "En vente") {
      return "green";  
    }    
    else if (this.cardOnSale == "Pas en vente") {
      return "red";
    } 
    else {
      console.log("Error: Unexpected onAir value");      
    }
  }

  removeCard(id: any) {
    this.Card.deleteCard(id);
  }
  
// Je créer ma fonction qui va me permettre d'associer l'image correspondante au set choisi

  setTest () {
    switch (this.set){
      case 'EX HIDDEN LEGENDS':
        return 'https://www.pokemonprice.com/Content/images/sets/ex-hidden-legends-pokemon-set-symbol.png';
      case 'BASE SET':
        return 'https://www.pokemonprice.com/Content/images/sets/base-pokemon-set-symbol.png';
      case 'FOSSIL':
        return 'https://www.pokemonprice.com/Content/images/sets/fossil-pokemon-set-symbol.png';
      case 'TEAM ROCKET':
        return 'https://www.pokemonprice.com/Content/images/sets/team-rocket-pokemon-set-symbol.png';
      case 'EX RUBY & SAPPHIRE':
          return 'https://www.pokemonprice.com/Content/images/sets/ex-ruby-and-sapphire-pokemon-set-symbol.png';
      case 'EX SANDSTORM':
        return 'https://www.pokemonprice.com/Content/images/sets/ex-sandstorm-pokemon-set-symbol.png';
      case 'EX DRAGON':
        return 'https://www.pokemonprice.com/Content/images/sets/ex-dragon-pokemon-set-symbol.png';  
    }
    
  }


// Je créer ma fonction qui me permet d'afficher la progression de ma barre selon son état noté sur 10

  barreEtat () {
    return ((this.synopsis) * 10)+'%';
  }
}