import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
declare var window: any;

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[] | undefined;

  experiencia = new Experiencia();

  formModal: any;

  formulario: any;

  constructor(public experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.getExperiencias();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
    this.formulario = new FormGroup( { 
      id: new FormControl(''),
      logo: new FormControl(''),
      empresa: new FormControl(''),
      puesto: new FormControl(''),
      desde: new FormControl(''),
      hasta: new FormControl(''),
      descripcion: new FormControl('')
    });
  }

  getExperiencias(): void {
    this.experienciaService.getExperiencias().subscribe(data => {
      this.experiencias = data;
    });
  }

  resetFormulario() {
    this.formulario.reset();
  }

  deleteExperiencia(id: number): void {
    this.experienciaService.deleteExperiencia(id)
      .subscribe(() => {
        this.experiencias = this.experiencias!.filter(experiencia => experiencia.id !== id);
      });
  }
  
  openModalExperiencia(): void {
    this.resetFormulario();
    this.formModal.show();
  }

  addExperiencia(): void {
    this.experiencia.logo         = this.formulario.controls['logo'].value;
    this.experiencia.empresa      = this.formulario.controls['empresa'].value
    this.experiencia.puesto       = this.formulario.controls['puesto'].value
    this.experiencia.desde        = this.formulario.controls['desde'].value
    this.experiencia.hasta        = this.formulario.controls['hasta'].value
    this.experiencia.descripcion  = this.formulario.controls['descripcion'].value
    this.experienciaService.addExperiencia(this.experiencia).subscribe(data => {
      this.experiencias?.push(data);
      this.formModal.hide();
    });
  }

  openModalExperienciaEdit(experiencia: any): void {

     this.formulario.controls['id'].value = experiencia!.id;
     this.formulario.controls['logo'].value = experiencia!.logo;
     this.formulario.controls['empresa'].value = experiencia!.empresa;
     this.formulario.controls['puesto'].value = experiencia.puesto;
     this.formulario.controls['desde'].value = experiencia.desde; 
     this.formulario.controls['hasta'].value = experiencia.hasta;
     this.formulario.controls['descripcion'].value = experiencia.descripcion;
     this.formModal.show();
  }

  updateExperiencia(): void {
    this.experiencia.logo = this.formulario.controls['logo'].value;
    this.experiencia.empresa = this.formulario.controls['empresa'].value
    this.experiencia.puesto = this.formulario.controls['puesto'].value
    this.experiencia.desde = this.formulario.controls['desde'].value
    this.experiencia.hasta = this.formulario.controls['hasta'].value
    this.experiencia.descripcion = this.formulario.controls['descripcion'].value
    this.experienciaService.addExperiencia(this.experiencia).subscribe(data => {
      this.experiencias?.push(data);
      this.formModal.hide();
    });
  }
}
