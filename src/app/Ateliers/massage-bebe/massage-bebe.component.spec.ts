import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageBebeComponent } from './massage-bebe.component';

describe('MassageBebeComponent', () => {
  let component: MassageBebeComponent;
  let fixture: ComponentFixture<MassageBebeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MassageBebeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageBebeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
