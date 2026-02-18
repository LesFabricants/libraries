import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseComponent } from './showcase.component';
import { TocComponent } from '../toc/toc.component';

describe('ShowcaseComponent', () => {
  let component: ShowcaseComponent;
  let fixture: ComponentFixture<ShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShowcaseComponent, TocComponent],
    });
    fixture = TestBed.createComponent(ShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
