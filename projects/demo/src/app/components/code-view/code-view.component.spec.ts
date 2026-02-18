import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeViewComponent } from './code-view.component';
import { HighlightModule, provideHighlightOptions } from 'ngx-highlightjs';
import { HIGHLIGHT_PROVIDER_OPTIONS } from '../../consts/highlight-provider-options';

describe('CodeViewComponent', () => {
  let component: CodeViewComponent;
  let fixture: ComponentFixture<CodeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CodeViewComponent, HighlightModule],
      providers: [provideHighlightOptions(HIGHLIGHT_PROVIDER_OPTIONS)],
    });
    fixture = TestBed.createComponent(CodeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
