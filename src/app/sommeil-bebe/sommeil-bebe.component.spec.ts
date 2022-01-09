import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommeilBebeComponent } from './sommeil-bebe.component';

describe('SommeilBebeComponent', () => {
  let component: SommeilBebeComponent;
  let fixture: ComponentFixture<SommeilBebeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SommeilBebeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SommeilBebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
