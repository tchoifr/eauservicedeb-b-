import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageMamanComponent } from './massage-maman.component';

describe('MassageMamanComponent', () => {
  let component: MassageMamanComponent;
  let fixture: ComponentFixture<MassageMamanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassageMamanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageMamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
