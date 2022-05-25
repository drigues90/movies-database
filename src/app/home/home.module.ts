import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { HomeRoutingModule } from './home-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';



@NgModule({
  declarations: [
    CabecalhoComponent,
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    CabecalhoComponent
  ]
})
export class HomeModule { }
