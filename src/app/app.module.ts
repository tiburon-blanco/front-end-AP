import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ExperienciaService } from './servicios/experiencia.service';
import { EducacionService } from './servicios/educacion.service';
import { ProyectoService } from './servicios/proyecto.service';
import { HabilidadService } from './servicios/habilidad.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    BannerComponent,
    AcercaDeComponent,
    EducacionComponent,
    HabilidadComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ExperienciaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ExperienciaService,
    EducacionService,
    ProyectoService,
    HabilidadService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
