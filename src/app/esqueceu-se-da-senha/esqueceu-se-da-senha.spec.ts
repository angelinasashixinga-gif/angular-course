import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqueceuSeDaSenha } from './esqueceu-se-da-senha';

describe('EsqueceuSeDaSenha', () => {
  let component: EsqueceuSeDaSenha;
  let fixture: ComponentFixture<EsqueceuSeDaSenha>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsqueceuSeDaSenha],
    }).compileComponents();

    fixture = TestBed.createComponent(EsqueceuSeDaSenha);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
