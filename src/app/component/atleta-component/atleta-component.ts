import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {
  //DECLARANDO ATRIBUTOS
  nome = 'Teste'
  cpf = 0
  sexo = ''
  cep = 0
  rua = ''
  bairro = ''
  cidade =''
  uf =''

  //declaração de funções
  exibirDados(){
    console.log(this.nome, this.cpf, this.sexo, this.cep, this.rua, this.bairro, this.cidade, this.uf   )
    this.limparDados()
  }

  limparDados() {
    this.nome= ''
     this.cpf=0
     this.sexo=''
     this.cep=''
     this.rua=''
     this.bairro=''
     this.cidade=''
     this.uf=''
  }
 
}



