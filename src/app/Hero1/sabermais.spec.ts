import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sabermais } from './DragonBallPage';

describe('DragonBallPage', () => {
  let component: Sabermais;
  let fixture: ComponentFixture<Sabermais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sabermais],
    }).compileComponents();

    fixture = TestBed.createComponent(Sabermais);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
