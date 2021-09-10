import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEvenementComponent } from './formulaire-evenement.component';

describe('FormulaireEvenementComponent', () => {
  let component: FormulaireEvenementComponent;
  let fixture: ComponentFixture<FormulaireEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
