import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

declare var window: any;

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css']
})


export class HabilidadComponent implements OnInit {

  habilidades: Habilidad[] | undefined;

  habilidad = new Habilidad();

  formModal: any;

  formulario: any;

  isUpdating = false;

  constructor(public habilidadService: HabilidadService) { }

  ngOnInit(): void {
    this.getHabilidades();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('modal_habilidad')
    );
    this.formulario = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      grado: new FormControl(''),
    });
  }

  getHabilidades() {
    this.habilidadService.getHabilidades().subscribe(data => {
      this.habilidades = data;
    });
  }


  resetFormulario() {
    this.formulario.reset();
  }

  deleteHabilidad(id: number): void {
    this.habilidadService.deleteHabilidad(id)
      .subscribe(() => {
        this.habilidades = this.habilidades!.filter(habilidad => habilidad.id !== id);
      });
  }

  openModalHabilidad(): void {
    this.isUpdating = false;
    this.resetFormulario();
    this.formModal.show();
  }

  addHabilidad(): void {
    this.habilidad.nombre = this.formulario.controls['nombre'].value;
    this.habilidad.grado = this.formulario.controls['grado'].value
    this.habilidadService.addHabilidad(this.habilidad).subscribe(data => {
      this.habilidades?.push(data);
      this.formModal.hide();
    });
  }

  openModalHabilidadEdit(habilidad: any): void {
    this.isUpdating = true;
    this.formulario.controls['id'].setValue(habilidad!.id);
    this.formulario.controls['nombre'].setValue(habilidad!.nombre);
    this.formulario.controls['grado'].setValue(habilidad!.grado);
    this.formModal.show();
  }

  updateHabilidad(): void {
    this.habilidad.id = this.formulario.controls['id'].value;
    this.habilidad.nombre = this.formulario.controls['nombre'].value;
    this.habilidad.grado = this.formulario.controls['grado'].value

    this.habilidadService.updateHabilidad(this.habilidad).subscribe(data => {
      this.formModal.hide();
      this.getHabilidades();
    });
  }
}
