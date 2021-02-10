import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private http: HttpClient
  ) {
    this.getCard();
  }

  cardSubject = new Subject<any[]>();

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json'
    })
  };

  private cards = [
/*    {
      id : 1,
      name: "Jurassic Park",
      onAir: "Blue Ray",
      affiche: "https://i.pinimg.com/originals/9d/88/14/9d881461a420bf7d277014f26683c417.jpg"
    },

    {
      id : 2,
      name:"StarWars",
      onAir: "Blue Ray",
      affiche: "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/175/star-wars-lascension-de-skywalker-affiche-saga-1175304.jpg"
    },

    {
      id : 3,
      name: "28 Jours plus tard",
      onAir: "En Salle",
      affiche: "https://www.fredzone.org/wp-content/uploads/2019/06/28-mois-plus-tard-640x360.jpg"
    },*/
  ];

  emitCardSubject () {
    this.cardSubject.next (this.cards.slice());
  }

  setOnAir () {
    for (const i of this.cards) {
      i.onAir = "En Salle";
    }
    this.emitCardSubject();
  }

  setOnBR () {
    for (const iterator of this.cards) {
      iterator.onAir = "Blue Ray";
    }
    this.emitCardSubject();
  }

  switchOnAir (index: number) {
    this.cards [index].onAir = "En Salle";
    this.emitCardSubject();
  }

  switchOnBR (index: number) {
    this.cards [index].onAir = "Blue Ray";
    this.emitCardSubject();
  }

  GetCardById (id: number) {
    return this.http.get<any>("/api/movies/" + id);
  }

  addCard (card: any) {
    this.http.post<any>("/api/movies", card, this.httpOptions).subscribe(res => {
      this.cards.push(res);
      this.emitCardSubject();
    });
  }

  getCard () {
    this.http.get<any>('/api/movies').subscribe((res) => {
      this.cards = res;
      this.emitCardSubject();
    });
  }

  modifCard (card: any) {
    var index = this.cards.findIndex (
      (cardToModif) => {
        if (cardToModif._id == card._id) {
          return true;
        }
      }
    )
    this.cards.splice (index, 1, card);
    this.emitCardSubject ();
    return this.http.put<any>("/api/movies/" + card._id, card, this.httpOptions);
  }

  deleteCard (id: any) {
    this.http.delete<any>("/api/movies/" + id).subscribe(res => {
      var index = this.cards.findIndex (
        (cardToDelete) => {
          if(cardToDelete._id == id) {
            return true;
          }
        }
      )
      this.cards.splice(index, 1);
      this.emitCardSubject();
    })
  }
}