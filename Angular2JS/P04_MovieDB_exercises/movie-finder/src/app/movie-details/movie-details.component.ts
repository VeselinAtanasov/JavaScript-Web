import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-move-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MoveDetailsComponent implements OnInit {
  public film : Movie;
  constructor(private route : ActivatedRoute, private movieService: MoviesService) { }

  ngOnInit() {

    this.route.params.subscribe(param =>{
      let id=param['id'];
      
      this.movieService
      .getMoveById(id)
      .subscribe(film =>{
        console.log(film)
        this.film = film
      })
    })
  }

}
