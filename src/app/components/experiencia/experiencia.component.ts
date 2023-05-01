import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { formatDate } from '@angular/common' 

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
     console.log(experiencia);
     this.formulario.controls['id'].setValue(experiencia!.id);
     this.formulario.controls['logo'].setValue(experiencia!.logo);
     this.formulario.controls['empresa'].setValue(experiencia!.empresa);
     this.formulario.controls['puesto'].setValue(experiencia.puesto);
     this.formulario.controls['desde'].setValue(formatDate(experiencia.desde,'yyyy-MM-dd','en')); 
     this.formulario.controls['hasta'].setValue(formatDate(experiencia.hasta,'yyyy-MM-dd','en'));
     this.formulario.controls['descripcion'].setValue(experiencia.descripcion);
     this.formModal.show();
  }

  updateExperiencia(): void {
    this.experiencia.id = this.formulario.controls['id'].value;
    this.experiencia.logo = this.formulario.controls['logo'].value;
    this.experiencia.empresa = this.formulario.controls['empresa'].value
    this.experiencia.puesto = this.formulario.controls['puesto'].value
    this.experiencia.desde = this.formulario.controls['desde'].value
    this.experiencia.hasta = this.formulario.controls['hasta'].value
    this.experiencia.descripcion = this.formulario.controls['descripcion'].value
    this.experienciaService.updateExperiencia(this.experiencia).subscribe(data => {
      this.formModal.hide();
      this.getExperiencias();
    });
  }
}
