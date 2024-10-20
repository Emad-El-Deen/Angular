import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../side-bar/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private _router: Router,
    private log: LoginService
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    console.log(this.loginForm.value);
    this.log.login(this.loginForm.value).subscribe({
      next: () => {
        this._router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
