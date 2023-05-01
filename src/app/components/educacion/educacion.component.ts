import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

declare var window: any;
 

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  educaciones: Educacion[] | undefined;

  educacion = new Educacion();

  formModal: any;

  formulario: any;

  isUpdating = false;

  constructor(public educacionService: EducacionService) { }

  ngOnInit(): void {
    this.getEducaciones();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('modal_educacion')
    );
    this.formulario = new FormGroup( { 
      id: new FormControl(''),
      logo: new FormControl(''),
      instituto: new FormControl(''),
      nombre: new FormControl(''),
      periodo: new FormControl('')
    });
  }

  getEducaciones(): void {
    this.educacionService.getEducaciones().subscribe(data => {
      this.educaciones = data;
    });
  }

  resetFormulario() {
    this.formulario.reset();
  }

  deleteEducacion(id: number): void {
    this.educacionService.deleteEducacion(id)
      .subscribe(() => {
        this.educaciones = this.educaciones!.filter(educacion => educacion.id !== id);
      });
  }
  
  openModalEducacion(): void {
    this.isUpdating = false;
    this.resetFormulario();
    this.formModal.show();
  }

  addEducacion(): void {
    this.educacion.logo        = this.formulario.controls['logo'].value;
    this.educacion.instituto   = this.formulario.controls['instituto'].value
    this.educacion.nombre      = this.formulario.controls['nombre'].value
    this.educacion.periodo  = this.formulario.controls['periodo'].value
    this.educacionService.addEducacion(this.educacion).subscribe(data => {
      this.educaciones?.push(data);
      this.formModal.hide();
    });
  }

  openModalEducacionEdit(educacion: any): void {
    this.isUpdating = true;
     this.formulario.controls['id'].setValue(educacion!.id);
     this.formulario.controls['logo'].setValue(educacion!.logo);
     this.formulario.controls['instituto'].setValue(educacion!.nombre);
     this.formulario.controls['nombre'].setValue(educacion.instituto);
     this.formulario.controls['periodo'].setValue(educacion.periodo);
     this.formModal.show();
  }

  updateEducacion(): void {
    this.educacion.id = this.formulario.controls['id'].value;
    this.educacion.logo = this.formulario.controls['logo'].value;
    this.educacion.instituto = this.formulario.controls['instituto'].value
    this.educacion.nombre = this.formulario.controls['nombre'].value
    this.educacion.periodo = this.formulario.controls['periodo'].value
    
    this.educacionService.updateEducacion(this.educacion).subscribe(data => {
      this.formModal.hide();
      this.getEducaciones();
    });
  }
}
