import { Injectable } from '@angular/core';
import { Atleta } from '../models/atleta';
import { CorridaComponent } from '../component/corrida-component/corrida-component';

@Injectable({
    providedIn: 'root'
})

export class AtletaService {

    // Declaração de arrays
    private atletas: Atleta[] = [];

    // Declaração de funções de manipulação do array

    // Adicionando elemento
    adicionarAtleta(atleta: Atleta) {
        //armenngue para gerar id
        atleta.id =this.atletas.length +1
        this.atletas.push(atleta);
    }



    // Listar elementos
    listarAtletas() {
        console.table(this.atletas);

        return this.atletas;
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