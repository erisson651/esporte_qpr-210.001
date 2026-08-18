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

    let atleta = new Atleta();

    atleta.nomeAtleta = this.nome;
atleta.cpfAtleta = this.cpf;
atleta.sexoAtleta = this.sexo;
atleta.cepAtleta = this.cep;
atleta.ruaAtleta = this.rua;
atleta.bairroAtleta = this.bairro;
atleta.cidadeAtleta = this.cidade;
atleta.ufAtleta = this.uf;
    this.atletaService.adicionarAtleta(atleta)
      .subscribe({
        next: (resposta) => {
          console.log(resposta);
          this.limparDados();
        },
        error: (msgErro) => {
          console.log(msgErro);
        }
      });

    this.atletaService.listarAtletas();
  }
}