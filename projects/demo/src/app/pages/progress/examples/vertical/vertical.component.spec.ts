import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalComponent } from './vertical.component';
import { NgxProgressDirective } from 'ngx-progress';
import { HighlightModule, provideHighlightOptions } from 'ngx-highlightjs';
import { ExampleComponent } from 'projects/demo/src/app/components/example/example.component';
import { HIGHLIGHT_PROVIDER_OPTIONS } from 'projects/demo/src/app/consts/highlight-provider-options';

describe('VerticalComponent', () => {
  let component: VerticalComponent;
  let fixture: ComponentFixture<VerticalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalComponent],
      imports: [NgxProgressDirective, HighlightModule, ExampleComponent],
      providers: [provideHighlightOptions(HIGHLIGHT_PROVIDER_OPTIONS)],
    });
    fixture = TestBed.createComponent(VerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
