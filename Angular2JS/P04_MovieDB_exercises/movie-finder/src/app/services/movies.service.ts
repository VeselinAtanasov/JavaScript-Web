import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movies } from "../models/movies.model";
import { Movie } from "../models/movie.model";

const apiKey = '96efeb1f9e33cfe6639cc6ac0da5fcd5';

@Injectable()
export class MoviesService {
    path: string = 'https://api.themoviedb.org/3/';
    popular: string = 'discover/movie?sort_by=popularity.desc';
    theaters :string ='discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
    kids: string ='discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    dramas: string ='discover/movie?with_genres=18&primary_release_year=2018';
    movie: string = 'movie/'
    movieAuth: string = '?api_key='
    authentication: string = '&api_key=';
    search='search/movie?query='

    constructor(private hhtpClient: HttpClient) { }

    getPopular() :Observable<Movies> {
       return this.hhtpClient.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`)
    }
    getTheaters() :Observable<Movies>{
        return this.hhtpClient.get<Movies>(`${this.path}${this.theaters}${this.authentication}${apiKey}`)
    }
    getKinds() : Observable<Movies>{
        return this.hhtpClient.get<Movies>(`${this.path}${this.kids}${this.authentication}${apiKey}`)
    }
    getDramas() : Observable<Movies>{
        return this.hhtpClient.get<Movies>(`${this.path}${this.dramas}${this.authentication}${apiKey}`)
    }
    getMoveById(id :number) : Observable<Movie>{
        return this.hhtpClient.get<Movie>(`${this.path}${this.movie}${id}${this.movieAuth}${apiKey}`)
    }
    getMovie(searchedMovie) : Observable<Movie>{
        // console.log(`${this.path}${this.search}${searchedMovie}${this.authentication}${apiKey}`)
        // console.log(searchedMovie)
        return this.hhtpClient.get<Movie>(`${this.path}${this.search}${searchedMovie}${this.authentication}${apiKey}`)
    }
}