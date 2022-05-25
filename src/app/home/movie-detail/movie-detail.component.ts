import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  private id!: number;
  movie = {} as any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      this.id = +params.get('id')!;
    });
    this.detail();
  }

  detail() {
    this.movieService.getMovieById(this.id).subscribe((movie) => {
      this.movie = movie;
      console.log(this.movie);
    });
  }

  loadImg(path: string) {
    return this.movieService.loadMovieImg(500,path);
  }

  randomBg(){
    var colors = ['bg-primary','bg-secondary','bg-success','bg-danger','bg-warning','bg-info','bg-dark','bg-info'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
}
