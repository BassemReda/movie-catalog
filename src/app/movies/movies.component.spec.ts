import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MoviesComponent } from './movies.component';
import { Observable, of } from 'rxjs';
import { MoviesAPIService } from './movies-api.service';
import { By } from '@angular/platform-browser';

describe('MoviesComponent', () => {
  let sampleResponse = {
    page: 1,
    results: [
      {
        adult: false,
        backdrop_path: '/wPU78OPN4BYEgWYdXyg0phMee64.jpg',
        genre_ids: [18, 80],
        id: 278,
        original_language: 'en',
        original_title: 'The Shawshank Redemption',
        overview: '',
        popularity: 70.845,
        poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        release_date: '1994-09-23',
        title: 'The Shawshank Redemption',
        video: false,
        vote_average: 8.7,
        vote_count: 21166,
      },
      {
        adult: false,
        backdrop_path: '/wPU78OPN4BYEgWYdXyg0phMee64.jpg',
        genre_ids: [18, 80],
        id: 278,
        original_language: 'en',
        original_title: 'The Shawshank Redemption',
        overview: '',
        popularity: 70.845,
        poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        release_date: '1994-09-23',
        title: 'The Shawshank Redemption',
        video: false,
        vote_average: 8.7,
        vote_count: 21166,
      },
    ],
    total_pages: 493,
    total_results: 9848,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  it('should create the movies component', async () => {
    let fixture = TestBed.createComponent(MoviesComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have movieList', async () => {
    let fixture = TestBed.createComponent(MoviesComponent);
    let component = fixture.debugElement.componentInstance;
    let moviesAPIService = fixture.debugElement.injector.get(MoviesAPIService);

    let spy = spyOn(moviesAPIService, 'getMovies').and.returnValue(
      new Observable((observer) => {
        observer.next(sampleResponse);
      })
    );

    fixture.detectChanges();

    expect(component.movieList.length).toBe(2);
    expect(fixture.debugElement.queryAll(By.css('.card')).length).toBe(2);
  });
});
