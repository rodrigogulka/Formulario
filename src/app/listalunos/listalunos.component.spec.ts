import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalunosComponent } from './listalunos.component';

describe('ListalunosComponent', () => {
  let component: ListalunosComponent;
  let fixture: ComponentFixture<ListalunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListalunosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListalunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
