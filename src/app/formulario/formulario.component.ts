import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  mensagem = ''; 

  mostrarMensagem() {
    this.mensagem = 'Formulário Enviado!';

    setTimeout(() => {
      this.mensagem = '';
    }, 4000);

  }
  }
  

