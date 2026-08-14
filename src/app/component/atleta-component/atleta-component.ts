import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../service/atleta-service';
import { Atleta } from '../../models/atleta';

@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {

  // DECLARANDO ATRIBUTOS
  constructor(private atletaService: AtletaService) {}

  nome = 'Teste';
  cpf = '';
  sexo = '';
  cep = '';
  rua = '';
  bairro = '';
  cidade = '';
  uf = '';

  // DECLARAÇÃO DE FUNÇÕES
  exibirDados() {
    console.log(
      this.nome,
      this.cpf,
      this.sexo,
      this.cep,
      this.rua,
      this.bairro,
      this.cidade,
      this.uf
    );

    this.limparDados();
  }

  limparDados() {
    this.nome = '';
    this.cpf = '';
    this.sexo = '';
    this.cep = '';
    this.rua = '';
    this.bairro = '';
    this.cidade = '';
    this.uf = '';
  }

  salvar() {

    const atleta = new Atleta();

    atleta.nome = this.nome;
    atleta.cpf = this.cpf;
    atleta.sexo = this.sexo;
    atleta.cep = this.cep;
    atleta.rua = this.rua;
    atleta.bairro = this.bairro;
    atleta.cidade = this.cidade;
    atleta.uf = this.uf;

    this.atletaService.adicionarAtleta(atleta);

    this.limparDados();

    this.atletaService.listarAtletas();
  }
}

