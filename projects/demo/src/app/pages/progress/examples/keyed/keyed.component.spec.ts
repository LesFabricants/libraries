import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyedComponent } from './keyed.component';
import { HighlightModule, provideHighlightOptions } from 'ngx-highlightjs';
import { ExampleComponent } from 'projects/demo/src/app/components/example/example.component';
import { NgxProgressDirective } from 'ngx-progress';
import { HIGHLIGHT_PROVIDER_OPTIONS } from 'projects/demo/src/app/consts/highlight-provider-options';

describe('KeyedComponent', () => {
  let component: KeyedComponent;
  let fixture: ComponentFixture<KeyedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyedComponent],
      imports: [NgxProgressDirective, HighlightModule, ExampleComponent],
      providers: [provideHighlightOptions(HIGHLIGHT_PROVIDER_OPTIONS)],
    });
    fixture = TestBed.createComponent(KeyedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
