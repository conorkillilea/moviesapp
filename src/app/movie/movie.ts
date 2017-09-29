export class Movie {
    id: number;
    name: string = '';
    location: string = '';
    genre: string = '';
    rating: number;
    complete: boolean = false;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
}
