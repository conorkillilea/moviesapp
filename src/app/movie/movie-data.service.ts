import { Injectable } from '@angular/core';
import {Movie} from './movie';

@Injectable()
export class MovieDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for Movie's
  movies: Movie[] = [];

  // Simulate POST /movies
  addMovie(movie: Movie): MovieDataService{
    if(!movie.id){
      movie.id = ++this.lastId;
    }
    this.movies.push(movie);
    return this;
  }

  // Simulate DELETE /movies/:id
  deleteMovieById(id: number): MovieDataService {
    this.movies = this.movies
      .filter(movie => movie.id !== id);
    return this;
  }   

  // Simulate PUT /movies/:id
  updateMovieById(id: number, values: Object = {}): Movie {
    let movie = this.getMovieById(id);
    if (!movie) {
      return null;
    }
    Object.assign(movie, values);
    return movie;
  }

  // Simulate GET /movies
  getAllMovies(): Movie[] {
    return this.movies;
  }

  // Simulate GET /movies/:id
  getMovieById(id: number): Movie {
    return this.movies
      .filter(movie => movie.id === id)
      .pop();
  }

  // Toggle movies complete
  toggleMovieComplete(movie: Movie){
    let updatedMovie = this.updateMovieById(movie.id, {
      complete: !movie.complete
    });
    return updatedMovie;
  }

  constructor() { }

}
