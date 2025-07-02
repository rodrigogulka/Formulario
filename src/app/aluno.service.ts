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
}
