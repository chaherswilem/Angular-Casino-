import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Game} from './game.model'
import {Jackbot} from "./jackbot.model";
import {filter, map, of, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {

  }

  getGames() {
    return this.http.get<Game[]>('http://stage.whgstage.com/front-end-test/games.php')
  }

  getJackpots() {
    return this.http.get<Jackbot[]>('http://stage.whgstage.com/front-end-test/jackpots.php')
  }
}
