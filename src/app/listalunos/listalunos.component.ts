import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listalunos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listalunos.component.html',
  styleUrls: ['./listalunos.component.scss']
})
export class ListalunosComponent {
   mensagem = '';

    mostrarMensagem() {
    this.mensagem = 'Cadastro Excluido!';
    

    setTimeout(() => {
      this.mensagem = '';
    }, 3000);
  }
}

