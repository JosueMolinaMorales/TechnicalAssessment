import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailComponent } from './heroes-detail/heroes-detail.component';
import { CreateHeroComponent } from './create-hero/create-hero/create-hero.component';
import { UpdateHeroComponent } from './update-hero/update-hero.component';
import { CreateQuestComponent } from './create-quest/create-quest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroDetailComponent,
    CreateHeroComponent,
    UpdateHeroComponent,
    CreateQuestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
