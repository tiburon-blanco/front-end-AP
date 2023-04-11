import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoApComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  login() {
    this.router.navigate(['/login'])
  }

}
