import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLimitterComponent } from './flex-limitter.component';

describe('FlexLimitterComponent', () => {
  let component: FlexLimitterComponent;
  let fixture: ComponentFixture<FlexLimitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexLimitterComponent]
    });
    fixture = TestBed.createComponent(FlexLimitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
