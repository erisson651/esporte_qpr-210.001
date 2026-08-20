import { Component, signal } from '@angular/core';
import { Corrida } from '../../../models/corrida';
import { CorridaService } from '../../../service/corrida-service';

@Component({
  selector: 'app-corrida-lista-component',
  imports: [],
  templateUrl: './corrida-lista-component.html',
  styleUrl: './corrida-lista-component.css',
})
export class CorridaListaComponent {

  listaCorridas = signal<Corrida[]>([]);

  constructor(
    private corridaService: CorridaService
  ) {}

  ngOnInit() {
    this.listar();
  }

  listar() {

    const dadosCorridas = this.corridaService.listarCorridas();

    this.listaCorridas.set(
      [...dadosCorridas].sort((a, b) =>
        a.nome.localeCompare(b.nome)
      )
    );

  }

}
