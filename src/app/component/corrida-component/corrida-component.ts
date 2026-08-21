import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Corrida } from '../../models/corrida';
import { CorridaService } from '../../service/corrida-service';

@Component({
  selector: 'app-corrida-component',
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css'
})
export class CorridaComponent {

  nomeCorrida = '';
  dataCorrida = '';
  distanciaCorrida = '';
  localCorrida = '';

  constructor(private corridaService: CorridaService) {}

  salvar() {

    const corrida = new Corrida();

    corrida.nomeCorrida = this.nomeCorrida;
    corrida.dataCorrida = this.dataCorrida;
    corrida.distanciaCorrida = this.distanciaCorrida;
    corrida.localCorrida = this.localCorrida;

    this.corridaService.adicionarCorrida(corrida);

    console.log('Corrida cadastrada:', corrida);

    this.limpar();
  }

  limpar() {

    this.nomeCorrida = '';
    this.dataCorrida = '';
    this.distanciaCorrida = '';
    this.localCorrida = '';

  }

}