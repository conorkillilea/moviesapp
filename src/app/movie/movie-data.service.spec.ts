import { TestBed, inject } from '@angular/core/testing';
import {Movie}from './movie';
import { MovieDataService } from './movie-data.service';

describe('MovieDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDataService]
    });
  });

  it('should ...', inject([MovieDataService], (service: MovieDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllMovies()', () => {

    it('should return an empty array by default', inject([MovieDataService], (service: MovieDataService) => {
      expect(service.getAllMovies()).toEqual([]);
    }));

    it('should return all movies', inject([MovieDataService], (service: MovieDataService) => {
      let movie1 = new Movie({name: 'Hello 1'});
      let movie2 = new Movie({name: 'Hello 2'});
      service.addMovie(movie1);
      service.addMovie(movie2);
      expect(service.getAllMovies()).toEqual([movie1, movie2]);
    }));

  });

  describe('#save(movie)', () => {

    it('should automatically assign an incrementing id', inject([MovieDataService], (service: MovieDataService) => {
      let movie1 = new Movie({name: 'Hello 1'});
      let movie2 = new Movie({name: 'Hello 2'});
      service.addMovie(movie1);
      service.addMovie(movie2);
      expect(service.getMovieById(1)).toEqual(movie1);
      expect(service.getMovieById(2)).toEqual(movie2);
    }));

  });

  describe('#deleteMovieById(id)', () => {

    it('should remove movie with the corresponding id', inject([MovieDataService], (service: MovieDataService) => {
      let movie1 = new Movie({name: 'Hello 1'});
      let movie2 = new Movie({name: 'Hello 2'});
      service.addMovie(movie1);
      service.addMovie(movie2);
      expect(service.getAllMovies()).toEqual([movie1, movie2]);
      service.deleteMovieById(1);
      expect(service.getAllMovies()).toEqual([movie2]);
      service.deleteMovieById(2);
      expect(service.getAllMovies()).toEqual([]);
    }));

    it('should not removing anything if movie with corresponding id is not found', inject([MovieDataService], (service: MovieDataService) => {
      let movie1 = new Movie({name: 'Hello 1'});
      let movie2 = new Movie({name: 'Hello 2'});
      service.addMovie(movie1);
      service.addMovie(movie2);
      expect(service.getAllMovies()).toEqual([movie1, movie2]);
      service.deleteMovieById(3);
      expect(service.getAllMovies()).toEqual([movie1, movie2]);
    }));

  });

  describe('#updateMovieById(id, values)', () => {

    it('should return movie with the corresponding id and updated data', inject([MovieDataService], (service: MovieDataService) => {
      let movie1 = new Movie({name: 'Hello 1'});
      service.addMovie(movie1);
      let updatedMovie = service.updateMovieById(1, {
        name: 'new title'
      });
      expect(updatedMovie.name).toEqual('new title'); 
    }));

    it('should return null if movie is not found', inject([MovieDataService], (service: MovieDataService) => {
      let movie1 = new Movie({name: 'Hello 1'});
      service.addMovie(movie1);
      let updatedMovie = service.updateMovieById(2, {
        name: 'new title'
      });
      expect(updatedMovie).toEqual(null);
    }));

  });

  //describe('#toggleMovieComplete(movie)', () => {
//
//   it('should return the updated movie with inverse complete status', inject([MovieDataService], (service: MovieDataService) => {
//      let movie = new Movie({name: 'Hello 1', complete: false});
//      service.addMovie(movie);
//      let updatedMovie = service.toggleMovieComplete(movie);
//      expect(updatedMovie.complete).toEqual(true);
//      service.toggleMovieComplete(movie);
//      expect(updatedMovie.complete).toEqual(false);
//    }));
//  });
});
