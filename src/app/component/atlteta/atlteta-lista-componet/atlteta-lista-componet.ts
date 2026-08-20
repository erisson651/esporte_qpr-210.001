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

          console.log('Atletas recebidos:', dadosAtletas);

          this.listaAtletas.set(
            [...dadosAtletas].sort((a, b) =>
              a.nomeAtleta.localeCompare(b.nomeAtleta)
            )
          );

        },

        error: (msgErro) => {
          console.log('Erro ao listar atletas:', msgErro);
        }

      });

  }

  // EDITAR
  caregaDadosAtletasForm(atleta: Atleta) {

    console.log('Atleta selecionado para editar:', atleta);

    this.router.navigate([
      '/cadastroAtleta',
      atleta.idAtleta
    ]);

  }

  // EXCLUIR
  excluir(idAtleta: number) {

    if (confirm('Deseja realmente excluir este atleta?')) {

      this.atletaService.excluirAtleta(idAtleta)
        .subscribe({

          next: (resposta) => {

            console.log(
              'Atleta excluído com sucesso!',
              resposta
            );

            // Atualiza a lista depois de excluir
            this.listar();

          },

          error: (msgErro) => {

            console.log(
              'Erro ao excluir atleta:',
              msgErro
            );

          }

        });

    }

  }

}