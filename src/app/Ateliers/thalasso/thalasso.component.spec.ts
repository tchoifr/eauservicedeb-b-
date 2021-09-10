import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThalassoComponent } from './thalasso.component';

describe('ThalassoComponent', () => {
  let component: ThalassoComponent;
  let fixture: ComponentFixture<ThalassoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThalassoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThalassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
