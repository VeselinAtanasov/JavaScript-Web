import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private symbols : number = 250;
  @Input() article : Article;
  @Input() articleDesc : string;
  public descToShow : string;
  public articleDescLen :number;
  public showReadMoreBtn : boolean = true;
  public showHideBtn : boolean =false;
  public imageIsShown : boolean =false;
  public imageButtonTitle : string = "Show Image";

  constructor() { 
    this.articleDesc = '';
    this.articleDescLen = 0;
  }

  ngOnInit() {
  }

  readMore(){
    this.articleDescLen = this.symbols;
    this.descToShow = this.articleDesc;
    if(this.articleDescLen>=this.articleDesc.length){

      this.showHideBtn=true;
      this.showReadMoreBtn=false;
    }else{
      this.descToShow = this.articleDesc.substring(0,this.articleDescLen);
    }
  }

  toggleImage(){
    if(!this.imageIsShown){
      this.imageIsShown= true;
      this.imageButtonTitle = "Hide Image"
    }else{
      this.imageIsShown= false;
      this.imageButtonTitle ="Show Image"
    }
  }

  hideDesc(){
    this.descToShow = '';
    this.articleDescLen = 0;
    this.showHideBtn=false;
    this.showReadMoreBtn =true;
  }

}
