import { Injectable } from '@angular/core';
import { Atleta } from '../models/atleta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AtletaService {

    atletas: Atleta[] = [];

    constructor(private http: HttpClient) {}

    // Adicionar atleta
    adicionarAtleta(atleta: Atleta): Observable<Atleta> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/`;

        return this.http.post<Atleta>(urlApi, atleta);
    }

    // Listar atletas
    listarAtletas(): Observable<Atleta[]> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/`;

        return this.http.get<Atleta[]>(urlApi);
    }

    // Remover elemento pelo ID
    removerElemento(idAtleta: number) {
        this.atletas = this.atletas.filter(
            elem => elem.id !== idAtleta
        );
    }

    // Remover elemento 2
    removerElemento2(atleta: Atleta) {
        let posArray = this.atletas.findIndex(
            elem => elem.id === atleta.id
        );

        this.atletas.splice(posArray, 1);
    }

    // Alterando elemento do array
    alterarElemento(atleta: Atleta) {
        let posArray = this.atletas.findIndex(
            elem => elem.id === atleta.id
        );

        this.atletas[posArray] = atleta;
    }
}