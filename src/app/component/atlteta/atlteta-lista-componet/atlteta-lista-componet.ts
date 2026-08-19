import { Component, signal } from '@angular/core';
import { Atleta } from '../../../models/atleta';
import { AtletaService } from '../../../service/atleta-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atlteta-lista-component',
  imports: [],
  templateUrl: './atlteta-lista-componet.html',
  styleUrl: './atlteta-lista-componet.css',
})
export class AtltetaListaComponent {

  listaAtletas = signal<Atleta[]>([]);

  constructor(
    private atletaService: AtletaService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listar();
  }

  listar() {

    this.atletaService.listarAtletas()
      .subscribe({

        next: (dadosAtletas) => {

          console.log('Dados recebidos da API:', dadosAtletas);

          this.listaAtletas.set(
            [...dadosAtletas].sort((a, b) =>
              a.nomeAtleta.localeCompare(b.nomeAtleta)
            )
          );

        },

        error: (msgErro: any) => {
          console.log('Erro ao listar Atletas:', msgErro);
        }

      });

  }

  excluir(idAtleta: number) {

    if (confirm('Deseja Excluir o Atleta?')) {

      this.atletaService.excluirAtleta(idAtleta)
        .subscribe({

          next: (resposta: any) => {

            console.log(
              'Excluído com Sucesso!!!',
              resposta
            );

            this.listar();

          },

          error: (msgErro: any) => {

            console.log(
              'Erro ao excluir Atleta:',
              msgErro
            );

          }

        });

    }

  }

  caregaDadosAtletasForm(atleta: Atleta) {

    this.router.navigate([
      '/cadastroAtleta',
      atleta.idAtleta
    ]);

  }

}