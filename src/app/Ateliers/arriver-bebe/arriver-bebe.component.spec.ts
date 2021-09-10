import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriverBebeComponent } from './arriver-bebe.component';

describe('ArriverBebeComponent', () => {
  let component: ArriverBebeComponent;
  let fixture: ComponentFixture<ArriverBebeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArriverBebeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArriverBebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
