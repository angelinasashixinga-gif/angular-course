import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tick } from './tick';

describe('Tick', () => {
  let component: Tick;
  let fixture: ComponentFixture<Tick>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tick],
    }).compileComponents();

    fixture = TestBed.createComponent(Tick);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
