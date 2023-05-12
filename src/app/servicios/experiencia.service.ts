import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';

@Injectable({
    providedIn: 'root'
})

export class ExperienciaService {

    private apiUrl = 'https://nameless-leaf-2280.fly.dev';

    constructor(private http: HttpClient) { }

    getExperiencias(): Observable<Experiencia[]> {
        return this.http.get<Experiencia[]>(this.apiUrl + '/experiencia');
    }

    deleteExperiencia(id: number): Observable<Experiencia> {
        return this.http.delete<Experiencia>(this.apiUrl + '/experiencia?id=' + id);
    }

    addExperiencia(experiencia: Experiencia): Observable<Experiencia> {
        return this.http.post<Experiencia>(this.apiUrl + '/experiencia', experiencia);
    }

    updateExperiencia(experiencia: Experiencia): Observable<Experiencia> {
        return this.http.put<Experiencia>(this.apiUrl + '/experiencia', experiencia);
    }
}