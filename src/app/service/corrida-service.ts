import { Injectable } from '@angular/core';
import { Corrida } from '../models/corrida';

@Injectable({
    providedIn: 'root'
})
export class CorridaService {

    corridas: Corrida[] = [];

    constructor() {
        this.listarCorridas();
    }

    adicionarCorrida(corrida: Corrida) {

        this.corridas.push(corrida);

        localStorage.setItem(
            'corridas',
            JSON.stringify(this.corridas)
        );
    }

    listarCorridas(): Corrida[] {

        const dados = localStorage.getItem('corridas');

        if (dados) {
            this.corridas = JSON.parse(dados);
        }

        return this.corridas;
    }

}