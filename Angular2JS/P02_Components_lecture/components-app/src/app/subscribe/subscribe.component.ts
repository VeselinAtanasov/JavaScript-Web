import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../domain/Game';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  @Input('subGameProp') subGame : Game;
  @Output() notification = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
    console.log(this.subGame);
  }

  getCurrentGame() : void{
    console.log('Current Game Id :' + this.subGame.title);
    //here we are invoking the db. Once the db was invoked we received response (200; 404 ...)
    //the idea is to show notification to the subscriber that the subscription is succ/unsucc
    //so we need to send info from the child to the parent :

    this.notification.emit('You were successfully subscribed')

  }

}
