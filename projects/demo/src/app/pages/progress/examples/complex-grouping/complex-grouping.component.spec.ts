import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexGroupingComponent } from './complex-grouping.component';

describe('ComplexGroupingComponent', () => {
  let component: ComplexGroupingComponent;
  let fixture: ComponentFixture<ComplexGroupingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexGroupingComponent]
    });
    fixture = TestBed.createComponent(ComplexGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
