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

    // Buscar um atleta pelo ID
    buscarAtleta(idAtleta: number): Observable<Atleta> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`;

        return this.http.get<Atleta>(urlApi);
    }

    // Editar atleta
    editarAtleta(atleta: Atleta): Observable<Atleta> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.idAtleta}`;

        return this.http.put<Atleta>(urlApi, atleta);
    }

    // Excluir atleta pelo ID
    excluirAtleta(idAtleta: number): Observable<any> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`;

        return this.http.delete<any>(urlApi);
    }

    // Remover elemento pelo ID
    removerElemento(idAtleta: number) {
        this.atletas = this.atletas.filter(
            elem => elem.idAtleta !== idAtleta
        );
    }

    // Remover elemento 2
    removerElemento2(atleta: Atleta) {
        let posArray = this.atletas.findIndex(
            elem => elem.idAtleta === atleta.idAtleta
        );

        if (posArray !== -1) {
            this.atletas.splice(posArray, 1);
        }
    }

    // Alterando elemento do array
    alterarElemento(atleta: Atleta) {
        let posArray = this.atletas.findIndex(
            elem => elem.idAtleta === atleta.idAtleta
        );

        if (posArray !== -1) {
            this.atletas[posArray] = atleta;
        }
    }
}