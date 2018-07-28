import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import {Movie} from "../models/movie.model"


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public popularFilms: Array<Movie>;
  public theatersFilms: Array<Movie>;
  public kidsFilms : Array<Movie>;
  public dramaFilms : Array<Movie>;
  public searchedMovie:any;

  constructor(private movieService: MoviesService) { }

  findMovie (myQuery){
    console.log(myQuery)
    const film = myQuery.search;
    this.movieService
    .getMovie(film)
    .subscribe(data =>{
      console.log(data);
      this.searchedMovie = data;
    })
  }

  ngOnInit() {
    this.movieService
      .getPopular()
      .subscribe(data => {
        this.popularFilms = data.results;
        console.log(this.popularFilms)
      }, err => {
        if (err) {
          console.log(err);
          return;
        }
      });

    this.movieService
      .getTheaters()
      .subscribe(data => {
        this.theatersFilms = data.results
        console.log(this.theatersFilms)
      }, err => {
        if (err) {
          console.log(err);
          return;
        }
      });

      this.movieService
      .getKinds()
      .subscribe(data => {
        this.kidsFilms = data.results
        console.log(this.kidsFilms)
      }, err => {
        if (err) {
          console.log(err);
          return;
        }
      });

      this.movieService
      .getDramas()
      .subscribe(data => {
        this.dramaFilms = data.results
        console.log(this.dramaFilms)
      }, err => {
        if (err) {
          console.log(err);
          return;
        }
      })
  }


}
