import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AtletaService } from '../../service/atleta-service';
import { Atleta } from '../../models/atleta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {

  constructor(
    private atletaService: AtletaService,
    private http: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  nome = 'Teste';
  cpf = '';
  sexo = '';
  cep = '';
  rua = '';
  bairro = '';
  cidade = '';
  uf = '';

  idAtleta = 0;
  editar = false;

  ngOnInit() {

    this.idAtleta = Number(
      this.http.snapshot.paramMap.get('id')
    );

    if (this.idAtleta > 0) {
      this.editar = true;
      this.carregaDados(this.idAtleta);
    }

  }

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

  carregaDados(idAtleta: number) {

    this.atletaService.buscarAtleta(idAtleta)
      .subscribe({

        next: (dadosAtleta) => {

          this.nome = dadosAtleta.nomeAtleta;
          this.cpf = dadosAtleta.cpfAtleta;
          this.sexo = dadosAtleta.sexoAtleta;
          this.cep = dadosAtleta.cepAtleta;
          this.rua = dadosAtleta.ruaAtleta;
          this.bairro = dadosAtleta.bairroAtleta;
          this.cidade = dadosAtleta.cidadeAtleta;
          this.uf = dadosAtleta.ufAtleta;

          this.cdr.detectChanges();

        },

        error: (msgErro) => {
          console.log('Erro ao listar Dados', msgErro);
        }

      });

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

    if (this.editar) {

      atleta.idAtleta = this.idAtleta;

      this.atletaService.editarAtleta(atleta)
        .subscribe({

          next: (resposta) => {
            console.log('Atleta alterado com sucesso!', resposta);
            this.limparDados();
          },

          error: (msgErro) => {
            console.log('Erro ao alterar Atleta', msgErro);
          }

        });

    } else {

      this.atletaService.adicionarAtleta(atleta)
        .subscribe({

          next: (resposta) => {
            console.log('Atleta cadastrado com sucesso!', resposta);
            this.limparDados();
          },

          error: (msgErro) => {
            console.log('Erro ao cadastrar Atleta', msgErro);
          }

        });

    }

  }

}