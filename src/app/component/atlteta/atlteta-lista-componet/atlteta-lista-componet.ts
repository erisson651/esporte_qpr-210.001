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

          this.listaAtletas.set(
            [...dadosAtletas].sort((a, b) =>
              a.nome.localeCompare(b.nome)
            )
          );

        },

        error: (msgErro) => {
          console.log("Erro ao listar Atletas", msgErro);
        }

      });

  }

  excluir(id: number) {

    if (confirm("Deseja Excluir o Atleta")) {

      this.atletaService.excluirAtleta(id)
        .subscribe({

          next: (resposta) => {
            console.log("Excluido com Sucesso!!!", resposta);
            this.listar();
          },

          error: (msgErro) => {
            console.log("Erro ao excluir Atleta", msgErro);
          }

        });

    }

  }

  caregaDadosAtletasForm(atleta: Atleta) {

    this.router.navigate(['/cadastroAtleta', atleta.id]);

  }

}