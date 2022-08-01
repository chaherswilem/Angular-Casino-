import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../game.model";
import {Jackbot} from "../jackbot.model";
import {GamesService} from "../games.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
@Input () showgame! :Game
  allJackbots! :Jackbot[]
  amount :any
  constructor(private service: GamesService) {
    this.getJackbots()
  }

  ngOnInit(): void {

  }

  getAmount():any{
    const jack =this.allJackbots.find((a)=> a.game===this.showgame.id)
    if (jack !== undefined){
      this.amount=jack.amount
    } else{
      this.amount=undefined
    }
    this.loop()

  }
  getJackbots(): void {
    this.service.getJackpots().subscribe(response => {
      this.allJackbots=response
      this.getAmount()


    })

  }

  loop():any {
    let x = Math.floor((Math.random() * 100) + 20);
    let rand = Math.round(Math.random() * 10)+12;
    setTimeout( () => {
      if(this.amount!== undefined){this.amount= this.amount+x}


      this.loop();
    }, rand*1000);
  };
}
