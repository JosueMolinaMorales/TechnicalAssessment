import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroComponent } from './create-hero/create-hero/create-hero.component';
import { CreateQuestComponent } from './create-quest/create-quest.component';
import { HeroDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { UpdateHeroComponent } from './update-hero/update-hero.component';

const routes: Routes = [
  { path: '', component: HeroesListComponent },
  { path: 'hero/:id', component:  HeroDetailComponent},
  { path: 'create', component: CreateHeroComponent},
  { path: 'hero/update/:id', component: UpdateHeroComponent},
  { path: 'hero/:id/quest/create', component: CreateQuestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
