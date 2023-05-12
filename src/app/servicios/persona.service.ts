import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';


@Injectable({
    providedIn: 'root'
})

export class PersonaService {

    private apiUrl = 'https://nameless-leaf-2280.fly.dev';

    constructor(private http: HttpClient) { }
    
    getPersona(): Observable<Persona> {
        return this.http.get<Persona>(this.apiUrl + '/persona');
    }
    
    updatePersona(persona: Persona): Observable<Persona> {
        return this.http.post<Persona>(this.apiUrl + '/persona', persona);
    }
}
