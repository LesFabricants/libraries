import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavyComponent } from './wavy.component';
import { NgxProgressDirective } from 'ngx-progress';
import { HighlightModule, provideHighlightOptions } from 'ngx-highlightjs';
import { ExampleComponent } from 'projects/demo/src/app/components/example/example.component';
import { HIGHLIGHT_PROVIDER_OPTIONS } from 'projects/demo/src/app/consts/highlight-provider-options';

describe('WavyComponent', () => {
  let component: WavyComponent;
  let fixture: ComponentFixture<WavyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WavyComponent],
      imports: [NgxProgressDirective, HighlightModule, ExampleComponent],
      providers: [provideHighlightOptions(HIGHLIGHT_PROVIDER_OPTIONS)],
    });
    fixture = TestBed.createComponent(WavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
