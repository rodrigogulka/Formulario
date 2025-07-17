import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunosSubject: BehaviorSubject<any[]>;

  alunos$;

  constructor() {
    const dadosSalvos = localStorage.getItem('alunos');
    const alunosIniciais = dadosSalvos ? JSON.parse(dadosSalvos) : [];
    this.alunosSubject = new BehaviorSubject<any[]>(alunosIniciais);
    this.alunos$ = this.alunosSubject.asObservable();

    // Sempre que os dados sofrerem alteração, atualiza o localStorage
    this.alunos$.subscribe(alunos => {
      localStorage.setItem('alunos', JSON.stringify(alunos));
    });
  }

  adicionarAluno(aluno: any) {
    const alunosAtual = this.alunosSubject.value;
    this.alunosSubject.next([...alunosAtual, aluno]);
  }

  removerAluno(index: number) {
    const alunosAtual = [...this.alunosSubject.value];
    alunosAtual.splice(index, 1);
    this.alunosSubject.next(alunosAtual);
  }
}
