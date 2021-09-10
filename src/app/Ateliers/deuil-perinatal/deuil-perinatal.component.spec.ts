import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuilPerinatalComponent } from './deuil-perinatal.component';

describe('DeuilPerinatalComponent', () => {
  let component: DeuilPerinatalComponent;
  let fixture: ComponentFixture<DeuilPerinatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeuilPerinatalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuilPerinatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
