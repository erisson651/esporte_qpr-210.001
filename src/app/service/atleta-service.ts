import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AtletaService {
    //Declaração de arrays
    private atletas: Atlteta [] = []

    //declaração de funções de manipulação do array 
    //adicionando Elemento
    adicionarAtleta(atleta: Atleta){
        this.atletas.push(atleta)
    }

    //listar elementos
    listarAtletas(){
        console.table(this.atletas)

        return this.atletas
    }

    //remover elementos
    removerElemento(idAtleta: number){
        this.atletas = this.atletas.findIndex(elem=>elem.id |== atleta.id)
        this.atletas.splice(1,posArray)

        //alterando elemento do array
        alterarelemento(atleta: Atleta){
            let posArray = this.atletas.findIndex(elem=>elem.id |== atleta.id)
            this.atletas[posArray]=atleta
        }
    }


