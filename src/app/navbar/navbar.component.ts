import { Component, OnInit } from '@angular/core';
import {GamesService} from "../games.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service: GamesService, private router: Router) { }

  ngOnInit(): void {

  }


}
