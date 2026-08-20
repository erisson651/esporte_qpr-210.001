import { Injectable } from '@angular/core';
import { Corrida } from '../models/corrida';

@Injectable({
  providedIn: 'root'
})
export class CorridaService {

  private chave = 'corridas';

  constructor() {}

  // Adicionar corrida
  adicionarCorrida(corrida: Corrida): Corrida {

    const corridas = this.listarCorridas();

    corrida.idCorrida = Date.now();

    corridas.push(corrida);

    localStorage.setItem(
      this.chave,
      JSON.stringify(corridas)
    );

    return corrida;
  }

  // Listar corridas
  listarCorridas(): Corrida[] {

    const dados = localStorage.getItem(this.chave);

    if (dados) {
      return JSON.parse(dados);
    }

    return [];
  }

  // Buscar corrida pelo ID
  buscarCorrida(idCorrida: number): Corrida | undefined {

    const corridas = this.listarCorridas();

    return corridas.find(
      corrida => corrida.idCorrida === idCorrida
    );
  }

  // Editar corrida
  editarCorrida(corrida: Corrida): Corrida | undefined {

    const corridas = this.listarCorridas();

    const posicao = corridas.findIndex(
      elemento => elemento.idCorrida === corrida.idCorrida
    );

    if (posicao !== -1) {

      corridas[posicao] = corrida;

      localStorage.setItem(
        this.chave,
        JSON.stringify(corridas)
      );

      return corrida;
    }

    return undefined;
  }

  // Excluir corrida
  excluirCorrida(idCorrida: number): boolean {

    const corridas = this.listarCorridas();

    const novaLista = corridas.filter(
      corrida => corrida.idCorrida !== idCorrida
    );

    if (novaLista.length !== corridas.length) {

      localStorage.setItem(
        this.chave,
        JSON.stringify(novaLista)
      );

      return true;
    }

    return false;
  }

}