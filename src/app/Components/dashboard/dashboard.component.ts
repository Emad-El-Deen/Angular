import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MoviesService } from '../movies.service';
import { LoginService } from '../side-bar/login.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})

export class DashboardComponent implements OnInit {
  constructor(
    private movies: MoviesService
  ) {}

  users = [];
  ngOnInit(): void {
  }

  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    rate: new FormControl(null, [Validators.min(0), Validators.max(5)]),
    image: new FormControl(null)
  });
  
  saveMovie() {
    let formData = new FormData();
    formData.append('name', this.myForm.get('name')?.value);
    formData.append('desc', this.myForm.get('desc')?.value);
    formData.append('price', this.myForm.get('price')?.value);
    formData.append('rate', this.myForm.get('rate')?.value);
    formData.append('image', this.myForm.get('image')?.value);  // You can append the file or image URL here
  
    console.log(formData);
  
    this.movies.saveNewMovies(formData).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

  fileChange(event: any) {
    console.log('change');
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        image: file,
      });
    }
  }
}
