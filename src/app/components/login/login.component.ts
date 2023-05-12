import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginFormulario: any;

  loading: any;

  error: any;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
   this.loading = false;
   this.error = false;
    this.loginFormulario = new FormGroup( { 
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  login(): void {
    this.loading = true;
    this.error = false;
    let email = this.loginFormulario.controls['email'].value;
    let password = this.loginFormulario.controls['password'].value;

    this.authService.login(email, password).subscribe({
      next: data => {
        this.loading = false;
        this.error = false;
        this.router.navigate(['/'])
      },
      error: err => { 
        this.loading = false;
        this.error = true;
      }
    });
  }
}
