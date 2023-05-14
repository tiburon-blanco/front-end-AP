import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';


@Injectable({
    providedIn: 'root'
})

export class PersonaService {

    private apiUrl = 'http://52.14.161.48:8080/';

    constructor(private http: HttpClient) { }
    
    getPersona(): Observable<Persona> {
        return this.http.get<Persona>(this.apiUrl + '/persona');
    }
    
    updatePersona(persona: Persona): Observable<Persona> {
        return this.http.post<Persona>(this.apiUrl + '/persona', persona);
    }
}
