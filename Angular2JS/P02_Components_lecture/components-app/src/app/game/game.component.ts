import { Component, OnInit } from '@angular/core';
import { Game } from '../domain/Game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public games : Array<Game>;
  public isShown : boolean = false;
  public username : string = 'default username' ;
  constructor() {
    this.games = [
      {id: 1, title: 'first game', image:'https://i.ytimg.com/vi/JVwUOpFWdc4/hqdefault.jpg'},
      {id: 2, title: 'second game', image:'https://www.ieskau-darbo.lt/wp-content/uploads/2017/11/Zaidimai-telefone.png'},
       
    ]
   }

  ngOnInit() {
  }
  showContacts(event) : void{
    console.log(event);
    this.isShown =! this.isShown
  }
  showName(username){
    console.log(username)
    this.username=username;
  }
  showNotification(event){
    console.log(event);
  }

}
