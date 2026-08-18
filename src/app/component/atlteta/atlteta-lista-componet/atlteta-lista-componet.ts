import { Component } from '@angular/core';
import { Atleta } from '../../../models/atleta';
import { Atleta-Service } from '../../../service/atleta-service';
import { Router } from '@angular/router';
import {signal} from '@angular/core'

@Component({
  selector: 'app-atlteta-lista-component',
  imports: [],
  templateUrl: './atlteta-lista-component.html',
  styleUrl: './atlteta-lista-component.css',
})
export class AtltetaListaComponent {
  //listaAtletas: Atleta[] =[]
  listaAtletas = signal<Atleta[]>([]);

  constructor(private AtletaService.listarAtletas, private router: Router) {}

  ngnInit(){
    this.listar()
  }

  listar(){
    this.AtletaService.listaAtletas()
    .subscribe({
      next: (dadosAtletas) => {
        //this.listaAtletas = [...dadosAtletas].sort((a, b)) =>a. nome.localeCompare(b.nome))
        this.listaAtletas.set ([...dadosAtletas].sort((a,b)=> a.
        nome.localeCompare(b.nome)))

      },
      error:(msgErro) => {
        console.log("Erro ao listar Atletas", msgErro)

      }
    })
  }
}

excluir(id: number) {
  if (confirm("Deseja Excluir o Atleta")){
    this.AtletaService.excluirAtleta(id)
    .subscribe({
      next: (resposta) => {
        console.log("Excluido com Sucesso!!!", resposta)
        this.listar()
      },
      error: (msgErro) => {
        console.log("Erro ao listar Atletas", msgErro)
      }
    })
  }
}

caregaDadosAtletasForm(atleta: Atleta) {
  this.router.navigate(['/cadastroAtleta', atleta.id])
}