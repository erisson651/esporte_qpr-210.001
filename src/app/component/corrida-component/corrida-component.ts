import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  corridas: any[] = [];

  salvar() {

    const corrida = {
      nome: this.nome,
      cpf: this.cpf,
      categoria: this.categoria,
      distancia: this.distancia,
      cidade: this.cidade,
      uf: this.uf
    };

    this.corridas.push(corrida);

    console.log('Corrida cadastrada:', corrida);

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