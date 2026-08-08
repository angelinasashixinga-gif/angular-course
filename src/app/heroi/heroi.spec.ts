import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heroi } from './heroi';

describe('Heroi', () => {
  let component: Heroi;
  let fixture: ComponentFixture<Heroi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heroi],
    }).compileComponents();

    fixture = TestBed.createComponent(Heroi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
