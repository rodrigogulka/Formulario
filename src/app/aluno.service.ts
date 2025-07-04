import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunosSubject = new BehaviorSubject<any[]>([]);
  alunos$ = this.alunosSubject.asObservable();

  adicionarAluno(aluno: any) {
    const alunosAtual = this.alunosSubject.value;
    this.alunosSubject.next([...alunosAtual, aluno]);
  }
  removerAluno(index: number) { // Conexão com o listalunos.component.ts
  const alunosAtual = this.alunosSubject.value;
  alunosAtual.splice(index, 1); // Remove aluno através do botão excluir - Incrementa valor 1+
  this.alunosSubject.next([...alunosAtual]);
}

}
