import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-card-modif',
  templateUrl: './card-modif.component.html',
  styleUrls: ['./card-modif.component.css']
})
export class CardModifComponent implements OnInit {
  card: any;
  constructor(
    private Card: CardService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.Card.GetCardById(id).subscribe(res => {
      this.card = res;
    });
  }

  onModif () {
    this.Card.modifCard (this.card).subscribe (res => {
      this.router.navigate (["/cards"]);
    })
  }

}
