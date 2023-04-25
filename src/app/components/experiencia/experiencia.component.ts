import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[] | undefined;

  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.getExperiencias().subscribe(data => {
      this.experiencias = data;
    });

  }

}

// import { Component, OnInit } from '@angular/core';
// // import { Experiencia } from 'src/app/model/experiencia.model';
// import { ExperienciaService } from 'src/app/servicios/experiencia.service';

// @Component({
//   selector: 'app-experiencia',
//   templateUrl: './experiencia.component.html',
//   styleUrls: ['./experiencia.component.css']
// })
// export class ExperienciaComponent implements OnInit {
//   // experiencia: Experiencia[];

//   constructor(private ExperienciaService: ExperienciaService) {
//   }

//   // r = this.ExperienciaService.getExperiencia();

//   ngOnInit(): void {
//     /*
//    this.ExperienciaService.getExperiencias().subscribe(data => {
//     //  this.experiencia = data;
//     });
//     */

//     this.ExperienciaService.getExperiencia();

//   }
// }
