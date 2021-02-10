import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { CardModifComponent } from './card-modif/card-modif.component';
import { CardNewComponent } from './card-new/card-new.component';
import { HomeComponent } from './home/home.component';
import { CardListComponent } from './card-list/card-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CardService } from './services/card.service';

const appRoutes: Routes = [
  {
    path: "cards",
    component: CardListComponent
  },
  {
    path: "new",
    component: CardNewComponent
  },
  {
    path: "modif/:id",
    component: CardModifComponent
  },
  {
    path: "",
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardModifComponent,
    CardNewComponent,
    HomeComponent,
    CardListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot (appRoutes)
  ],
  providers: [
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
