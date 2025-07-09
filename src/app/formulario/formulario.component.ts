import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AlunoService } from '../aluno.service'; 

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  nome = '';
  idade = '';
  curso = '';
  dataInicio = '';
  dataTermino = '';
  mensagem = '';
  erro = '';

  constructor(private alunoService: AlunoService) {}

  enviarFormulario(form: NgForm) {
    if (form.invalid) {
      this.erro = 'Preencha todos os campos.';
      this.mensagem = '';
      return;
    }

    if (this.dataTermino <= this.dataInicio) {
      this.erro = 'A Data de Término não pode ser anterior ou a mesma da Data de Início';
      this.mensagem = '';
      return;
    }

    const novoAluno = {
      nome: this.nome,
      idade: this.idade,
      curso: this.curso,
      dataInicio: this.dataInicio,
      dataTermino: this.dataTermino
    };

    this.alunoService.adicionarAluno(novoAluno);

    this.erro = '';
    this.mensagem = 'Formulário enviado com sucesso!';

    setTimeout(() => {
      this.mensagem = '';
    }, 4000);

    form.reset();
  }
}