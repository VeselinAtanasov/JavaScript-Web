//Modules:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from "@angular/router"
import { FormsModule } from "@angular/forms"

//Componets:
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MovieComponent } from './movie/movie.component';
import { MoveDetailsComponent } from './movie-details/movie-details.component'; 

//Services:
import { MoviesService } from './services/movies.service';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent,
    MoveDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component: MoviesComponent},
      {path:'movie/:id',component:MoveDetailsComponent}
    ])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
