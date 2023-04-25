import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia.model';


@Injectable({
    providedIn: 'root'
})

export class ExperienciaService {

    private apiUrl = 'api';

    constructor(private http: HttpClient) { }

    getExperiencias(): Observable<Experiencia[]> {
        return this.http.get<Experiencia[]>(this.apiUrl + '/experiencia');

    }
}