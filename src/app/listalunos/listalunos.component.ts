import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-listalunos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listalunos.component.html',
  styleUrls: ['./listalunos.component.scss']
})
export class ListalunosComponent implements OnInit {
  mensagem = '';
  alunos: any[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit() {
    this.alunoService.alunos$.subscribe(data => {
      this.alunos = data;
    });
  }
  
  excluirAluno(index: number) {
  this.alunoService.removerAluno(index);
  this.mostrarMensagem();
}


  mostrarMensagem() {
    this.mensagem = 'Cadastro Excluído!';

    setTimeout(() => {
      this.mensagem = '';
    }, 3000);
  }
}
