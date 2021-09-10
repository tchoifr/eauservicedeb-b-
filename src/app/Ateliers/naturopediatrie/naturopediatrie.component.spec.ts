import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturopediatrieComponent } from './naturopediatrie.component';

describe('NaturopediatrieComponent', () => {
  let component: NaturopediatrieComponent;
  let fixture: ComponentFixture<NaturopediatrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturopediatrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturopediatrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
