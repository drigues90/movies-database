import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {

  movies: any[] = [];

  constructor(private movieService: MovieService) {
    this.movieService.getMovies().subscribe((movie) => {
      this.movies = movie.results;
      console.log(this.movies);
    });
  }

  loadImg(path: string) {
    return this.movieService.loadMovieImg(500,path);
  }
}
