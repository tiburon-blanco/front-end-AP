import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { PersonaService } from 'src/app/servicios/persona.service';

declare var window: any;
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona = new Persona();

  formModal: any;

  formulario: any;

  isUpdating = false;

  isAuth: any;

  loading: any;

  constructor(private authService: AuthService, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.loading = false;
    this.isAuth = this.authService.isLoggedIn();
    this.getPersona();
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('modal_persona')
    );
    this.formulario = new FormGroup({
      id: new FormControl(''),
      profesion: new FormControl(''),
      fechaNacimiento: new FormControl(''),
      web: new FormControl(''),
      titulo: new FormControl(''),
      telefono: new FormControl(''),
      email: new FormControl(''),
      ciudad: new FormControl(''),
      disponibilidad: new FormControl(''),
      description: new FormControl(''),
    });
  };

  getPersona(): void {
    this.personaService.getPersona().subscribe(data => {
      this.persona = data;
    });
  }

  resetFormulario() {
    this.formulario.reset();
  }

  openModalPersonaEdit(persona: any): void {
    this.loading = false;
    this.isUpdating = true;
    this.formulario.controls['id'].setValue(persona!.id);
    this.formulario.controls['profesion'].setValue(persona!.profesion);
    this.formulario.controls['fechaNacimiento'].setValue(persona!.fechaNacimiento);
    this.formulario.controls['web'].setValue(persona!.web);
    this.formulario.controls['titulo'].setValue(persona!.titulo);
    this.formulario.controls['telefono'].setValue(persona!.telefono);
    this.formulario.controls['email'].setValue(persona!.email);
    this.formulario.controls['ciudad'].setValue(persona!.ciudad);
    this.formulario.controls['disponibilidad'].setValue(persona!.disponibilidad);
    this.formulario.controls['description'].setValue(persona!.description);
    this.formModal.show();
  }

  updatePersona(): void {
    this.loading = true;
    this.persona.id = this.formulario.controls['id'].value;
    this.persona.profesion = this.formulario.controls['profesion'].value;
    this.persona.fechaNacimiento = this.formulario.controls['fechaNacimiento'].value
    this.persona.web = this.formulario.controls['web'].value
    this.persona.titulo = this.formulario.controls['titulo'].value
    this.persona.telefono = this.formulario.controls['telefono'].value
    this.persona.email = this.formulario.controls['email'].value
    this.persona.ciudad = this.formulario.controls['ciudad'].value
    this.persona.disponibilidad = this.formulario.controls['disponibilidad'].value
    this.persona.description = this.formulario.controls['description'].value

    this.personaService.updatePersona(this.persona).subscribe(data => {
      this.formModal.hide();
      this.getPersona();
    });
  }

}


