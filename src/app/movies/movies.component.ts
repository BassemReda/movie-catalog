import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  page = 1;
  movieList: any[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.populateMovies();
  }

  populateMovies() {
    this.moviesService.getMovies(this.page).subscribe((response) => {
      this.movieList = response.results;
    });
  }
}
