import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private API_KEY = '778c41f410b67e1ec1992a006d80a30e';
  private BASE_URL = 'https://api.themoviedb.org/3/';
  private BASE_IMG_URL = 'https://image.tmdb.org/t/p/w';

  private withBaseUrl = (path: string) => `${this.BASE_URL}${path}?api_key=${this.API_KEY}&language=pt-BR`;

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<any>(this.withBaseUrl('movie/popular'));
  }

  getMovieById(id: number){
    return this.http.get<any>(this.withBaseUrl(`movie/${id}`));
  }

  loadMovieImg(size:number, path: string) {
    return`${this.BASE_IMG_URL}${size}/${path}`;
  }
}
