import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';


@Injectable({
    providedIn: 'root'
})

export class EducacionService {

    private apiUrl = 'http://52.14.161.48:8080/';

    constructor(private http: HttpClient) { }
    

    getEducaciones(): Observable<Educacion[]> {
        return this.http.get<Educacion[]>(this.apiUrl + '/educacion');
    }

    deleteEducacion(id: number): Observable<Educacion> {
        return this.http.delete<Educacion>(this.apiUrl + '/educacion?id='+ id);
    }

    addEducacion(educacion: Educacion): Observable<Educacion> {
        return this.http.post<Educacion>(this.apiUrl + '/educacion', educacion);
    }
    
    updateEducacion(educacion: Educacion): Observable<Educacion> {
        return this.http.put<Educacion>(this.apiUrl + '/educacion', educacion);
    }
}
