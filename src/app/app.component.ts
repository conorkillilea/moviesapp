import { Component } from '@angular/core';
import { Movie } from './movie/movie';
import { MovieDataService } from './movie/movie-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieDataService]
})
export class AppComponent {

  newMovie: Movie = new Movie();
  constructor(private movieDataService: MovieDataService){
  }

  addMovie() {
    this.movieDataService.addMovie(this.newMovie);
    this.newMovie = new Movie();
  }

  toggleMovieComplete(movie) {
    this.movieDataService.toggleMovieComplete(movie);
  }

  removeMovie(movie) {
    this.movieDataService.deleteMovieById(movie.id);
  }

  get movies() {
    return this.movieDataService.getAllMovies();
  }

  //title = 'app';
}
