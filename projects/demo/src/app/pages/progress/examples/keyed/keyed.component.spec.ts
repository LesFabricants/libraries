import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyedComponent } from './keyed.component';

describe('KeyedComponent', () => {
  let component: KeyedComponent;
  let fixture: ComponentFixture<KeyedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyedComponent]
    });
    fixture = TestBed.createComponent(KeyedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
