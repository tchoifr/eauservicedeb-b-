import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesPacksComponent } from './les-packs.component';

describe('LesPacksComponent', () => {
  let component: LesPacksComponent;
  let fixture: ComponentFixture<LesPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesPacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
