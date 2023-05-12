import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { formatDate } from '@angular/common';

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

  isAuth: any;

  loading: any;

  constructor(public authService: AuthService, public proyectoService: ProyectoService) { }

  ngOnInit(): void {
    this.loading = false;
    this.isAuth = this.authService.isLoggedIn();
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
    this.loading = false;
    this.isUpdating = false;
    this.resetFormulario();
    this.formModal.show();
  }

  addProyecto(): void {
    this.loading = true;
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
    this.loading = false;
    this.isUpdating = true;
    this.formulario.controls['id'].setValue(proyecto!.id);
    this.formulario.controls['nombre'].setValue(proyecto!.nombre);
    this.formulario.controls['descripcion'].setValue(proyecto!.descripcion);
    this.formulario.controls['link'].setValue(proyecto.link);
    this.formulario.controls['hasta'].setValue(formatDate(proyecto.hasta,'yyyy-MM-dd','en'));
    this.formModal.show();
  }

  updateProyecto(): void {
    this.loading = true;
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
