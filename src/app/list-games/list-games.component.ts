import {Component, OnChanges, OnInit} from '@angular/core';
import {Game} from "../game.model";
import {GamesService} from "../games.service";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, first, map, of, take, toArray} from "rxjs";
import {Jackbot} from "../jackbot.model";

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {
  allGames: Game[] = []
  category!: any
  amount!:any

  constructor(private service: GamesService, private router: Router) {
    this.getGames()
  }

  ngOnInit(): void {

    if (this.router.url.split('/')[2] === "other") {
      this.category = ['fun', 'ball', 'virtual']
    } else {
      this.category = this.router.url.split('/')[2]
    }

  }


  getGames(): void {
    this.service.getGames().subscribe(response => {
      this.allGames = response.filter(e => {
        if (Array.isArray(this.category)){
          for (let i = 0; i < this.category.length; i++) {
            if (e.categories.includes(this.category[i])) {
              return true
            }
          }
          return false
        }else if (e.categories.includes(this.category)) {
          return true
        }else{
          return  false
        }

      })
    })

  }



}

