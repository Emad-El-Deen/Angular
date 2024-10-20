import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'], 
})
export class ProductsComponent implements OnInit {
  movies: any[] = [];

  constructor(private data: MoviesService) {}

  ngOnInit(): void {
    this.getMovies();
  }


  getMovies(): void {
    this.data.getMovies().subscribe((data) => {
      this.movies = data;
      console.log(this.movies);
    });
  }


  deleteMovie(id: any): void {
    this.data.deleteMovie(id).subscribe((data) => {
      console.log('Movie deleted:', data);
      this.getMovies();
    });
  }

  updateMovie(id: any, updatedData: any): void {
    this.data.updateMovie(id, updatedData).subscribe((data) => {
      console.log('Movie updated:', data);
      this.getMovies();
    });
  }
}
