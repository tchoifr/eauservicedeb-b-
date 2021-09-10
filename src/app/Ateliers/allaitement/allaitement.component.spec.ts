import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllaitementComponent } from './allaitement.component';

describe('AllaitementComponent', () => {
  let component: AllaitementComponent;
  let fixture: ComponentFixture<AllaitementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllaitementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllaitementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
