import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CorridaService } from '../../service/corrida-service';
import { Corrida } from '../../models/corrida';

@Component({
  selector: 'app-corrida-component',
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css'
})
export class CorridaComponent {

  nome = '';
  cpf = '';
  categoria = '';
  distancia = '';
  cidade = '';
  uf = '';

  constructor(
    private corridaService: CorridaService
  ) {}

  salvar() {

    const corrida = new Corrida();

    corrida.nome = this.nome;
    corrida.cpf = this.cpf;
    corrida.categoria = this.categoria;
    corrida.distancia = this.distancia;
    corrida.cidade = this.cidade;
    corrida.uf = this.uf;

    const resposta =
      this.corridaService.adicionarCorrida(corrida);

    console.log(
      'Corrida cadastrada com sucesso!',
      resposta
    );

    this.limpar();

  }

  limpar() {

    this.nome = '';
    this.cpf = '';
    this.categoria = '';
    this.distancia = '';
    this.cidade = '';
    this.uf = '';

  }

}