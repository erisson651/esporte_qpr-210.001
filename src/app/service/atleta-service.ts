import { Injectable } from '@angular/core';
import { Atleta } from '../models/atleta';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AtletaService {

    atletas: Atleta[] = [];

    constructor(private http: HttpClient) {}

    // Adicionar atleta
    adicionarAtleta(atleta: Atleta): Observable<Atleta> {

        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/`;

        const dados = {
            nome: atleta.nomeAtleta,
            cpf: atleta.cpfAtleta,
            sexo: atleta.sexoAtleta,
            cep: atleta.cepAtleta,
            rua_logradouro: atleta.ruaAtleta,
            bairro: atleta.bairroAtleta,
            cidade: atleta.cidadeAtleta,
            uf: atleta.ufAtleta
        };

        return this.http.post<Atleta>(urlApi, dados);
    }

    // Listar atletas
    listarAtletas(): Observable<Atleta[]> {

        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/`;

        return this.http.get<any[]>(urlApi).pipe(
            map(dados => dados.map(item => {

                const atleta = new Atleta();

                atleta.idAtleta = Number(item.id);
                atleta.nomeAtleta = item.nome;
                atleta.cpfAtleta = String(item.cpf);
                atleta.sexoAtleta = item.sexo;
                atleta.cepAtleta = String(item.cep);
                atleta.ruaAtleta = item.rua_logradouro;
                atleta.bairroAtleta = item.bairro;
                atleta.cidadeAtleta = item.cidade;
                atleta.ufAtleta = item.uf;

                return atleta;
            }))
        );
    }

    // Buscar um atleta pelo ID
    buscarAtleta(idAtleta: number): Observable<Atleta> {

        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${idAtleta}`;

        return this.http.get<any>(urlApi).pipe(
            map(item => {

                const atleta = new Atleta();

                atleta.idAtleta = Number(item.id);
                atleta.nomeAtleta = item.nome;
                atleta.cpfAtleta = String(item.cpf);
                atleta.sexoAtleta = item.sexo;
                atleta.cepAtleta = String(item.cep);
                atleta.ruaAtleta = item.rua_logradouro;
                atleta.bairroAtleta = item.bairro;
                atleta.cidadeAtleta = item.cidade;
                atleta.ufAtleta = item.uf;

                return atleta;
            })
        );
    }

    // Editar atleta
    editarAtleta(atleta: Atleta): Observable<Atleta> {

        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/${atleta.idAtleta}`;

        const dados = {
            nome: atleta.nomeAtleta,
            cpf: atleta.cpfAtleta,
            sexo: atleta.sexoAtleta,
            cep: atleta.cepAtleta,
            rua_logradouro: atleta.ruaAtleta,
            bairro: atleta.bairroAtleta,
            cidade: atleta.cidadeAtleta,
            uf: atleta.ufAtleta
        };

        return this.http.put<Atleta>(urlApi, dados);
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