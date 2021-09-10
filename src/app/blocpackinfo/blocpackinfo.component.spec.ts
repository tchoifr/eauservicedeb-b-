import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocpackinfoComponent } from './blocpackinfo.component';

describe('BlocpackinfoComponent', () => {
  let component: BlocpackinfoComponent;
  let fixture: ComponentFixture<BlocpackinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocpackinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocpackinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
