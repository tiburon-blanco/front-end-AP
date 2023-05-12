import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  isAuth: any;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.isAuth = this.authService.isLoggedIn();
  }

  logout(): void {
    if(confirm("Desea salir?")){
      this.authService.logout();
      this.isAuth = this.authService.isLoggedIn();
      window.location.reload();
    }

  }

}
