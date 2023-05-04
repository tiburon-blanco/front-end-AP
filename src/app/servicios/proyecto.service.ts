import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../model/proyecto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {

  private apiUrl = 'https://nameless-leaf-2280.fly.dev';

  constructor(private http: HttpClient) { }

  getProyectos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.apiUrl + '/proyecto');
  }

  deleteProyecto(id: number): Observable<Proyecto> {
    return this.http.delete<Proyecto>(this.apiUrl + '/proyecto?id=' + id);
  }

  addProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.apiUrl + '/proyecto', proyecto);
  }

  updateProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(this.apiUrl + '/proyecto', proyecto);
  }

}

