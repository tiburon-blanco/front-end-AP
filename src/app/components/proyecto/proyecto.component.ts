import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { formatDate } from '@angular/common'

declare var window: any;

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})


export class ProyectoComponent implements OnInit {

  proyectos: Proyecto[] | undefined;

  proyecto = new Proyecto();

  formModal: any;

  formulario: any;

  isUpdating = false;

  constructor(public proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.getProyectos();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('modal_proyecto')
    );
    this.formulario = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
      fecha: new FormControl(''),
      link: new FormControl(''),
    });
  }
  getProyectos() {
    this.proyectoService.getProyectos().subscribe(data => {
      this.proyectos = data;
    });
  }

  // getProyecto(): void {

  // }

  resetFormulario() {
    this.formulario.reset();
  }

  deleteProyecto(id: number): void {
    this.proyectoService.deleteProyecto(id)
      .subscribe(() => {
        this.proyectos = this.proyectos!.filter(proyecto => proyecto.id !== id);
      });
  }

  openModalProyecto(): void {
    this.isUpdating = false;
    this.resetFormulario();
    this.formModal.show();
  }

  addProyecto(): void {
    this.proyecto.nombre = this.formulario.controls['nombre'].value;
    this.proyecto.descripcion = this.formulario.controls['descripcion'].value
    this.proyecto.fecha = this.formulario.controls['fecha'].value
    this.proyecto.link = this.formulario.controls['link'].value
    this.proyectoService.addProyecto(this.proyecto).subscribe(data => {
      this.proyectos?.push(data);
      this.formModal.hide();
    });
  }

  openModalProyectoEdit(proyecto: any): void {
    this.isUpdating = true;
    this.formulario.controls['id'].setValue(proyecto!.id);
    this.formulario.controls['nombre'].setValue(proyecto!.nombre);
    this.formulario.controls['descripcion'].setValue(proyecto!.descripcion);
    this.formulario.controls['link'].setValue(proyecto.link);
    this.formulario.controls['fecha'].setValue(proyecto.fecha);
    this.formModal.show();
  }

  updateProyecto(): void {
    this.proyecto.id = this.formulario.controls['id'].value;
    this.proyecto.nombre = this.formulario.controls['nombre'].value;
    this.proyecto.descripcion = this.formulario.controls['descripcion'].value
    this.proyecto.link = this.formulario.controls['link'].value
    this.proyecto.fecha = this.formulario.controls['fecha'].value

    this.proyectoService.updateProyecto(this.proyecto).subscribe(data => {
      this.formModal.hide();
      this.getProyectos();
    });
  }
}
