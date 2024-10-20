import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  featuredMovies = [
    { title: 'Inception', genre: 'Sci-Fi', poster_path: 'inception.jpg' },
    { title: 'The Dark Knight', genre: 'Action', poster_path: 'dark-knight.jpg' },
    { title: 'Interstellar', genre: 'Sci-Fi', poster_path: 'interstellar.jpg' },
    { title: 'Titanic', genre: 'Romance', poster_path: 'titanic.jpg' }
  ];


  viewDetails(movie: any) {
    console.log('Movie Details:', movie);
  }

}
