import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TocComponent } from './toc.component';
import { RouterModule } from '@angular/router';

describe('TocComponent', () => {
  let component: TocComponent;
  let fixture: ComponentFixture<TocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TocComponent, RouterModule.forRoot([])],
    });
    fixture = TestBed.createComponent(TocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
