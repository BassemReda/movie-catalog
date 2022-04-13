import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface ResponseType {
  results: {}[];
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiKey = 'b33ab0b58b9787c2467de63424973be2';

  constructor(private http: HttpClient) {}

  getMovies(page: number) {
    return this.http
      .get<ResponseType>(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&page=${page}`
      )
  }
}
