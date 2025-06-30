import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ListalunosComponent } from './listalunos/listalunos.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormularioComponent, ListalunosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
