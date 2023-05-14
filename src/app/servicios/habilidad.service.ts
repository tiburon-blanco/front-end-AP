import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidad } from '../model/habilidad.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  private apiUrl = 'http://52.14.161.48:8080/';

  constructor(private http: HttpClient) { }

  getHabilidades(): Observable<Habilidad[]> {

    return this.http.get<Habilidad[]>(this.apiUrl + '/habilidad');
  }

  deleteHabilidad(id: number): Observable<Habilidad> {
    return this.http.delete<Habilidad>(this.apiUrl + '/habilidad?id=' + id);
  }

  addHabilidad(habilidad: Habilidad): Observable<Habilidad> {
    return this.http.post<Habilidad>(this.apiUrl + '/habilidad', habilidad);
  }

  updateHabilidad(habilidad: Habilidad): Observable<Habilidad> {
    return this.http.put<Habilidad>(this.apiUrl + '/habilidad', habilidad);
  }

}





