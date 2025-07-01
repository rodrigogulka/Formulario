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
  nome = '';
  curso = '';
  dataInicio = '';
  dataTermino = '';
  mensagem = '';
  erro = '';

  enviarFormulario(form: NgForm) {
    if (form.invalid) {
      this.erro = 'Preencha todos os campos.';
      this.mensagem = '';
      return;

    }

    this.erro = '';
    this.mensagem = 'Formulário enviado com sucesso!';

    setTimeout(() => {
      this.mensagem = '';
    }, 4000);

    form.reset(); // limpa o formulário
  }
}
