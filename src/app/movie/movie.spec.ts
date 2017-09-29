import { Movie } from './movie';

describe('Movie', () => {
  it('should create an instance', () => {
    expect(new Movie()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let movie = new Movie({
      name: 'hello'
    });
    expect(movie.name).toEqual('hello');
  });
});
