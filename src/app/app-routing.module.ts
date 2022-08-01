import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListGamesComponent} from "./list-games/list-games.component";

const routes: Routes = [
  {path:'game',children:[{path:'top',component:ListGamesComponent},
      {path:'new',component:ListGamesComponent},
      {path:'slots',component:ListGamesComponent},
      {path:'jackpots',component:ListGamesComponent},
      {path:'live',component:ListGamesComponent},
      {path:'blackjack',component:ListGamesComponent},
      {path:'roulette',component:ListGamesComponent},
      {path:'table',component:ListGamesComponent},
      {path:'poker',component:ListGamesComponent},
      {path:'other',component:ListGamesComponent},
    ]},
  {path:'', redirectTo:'game/top', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
