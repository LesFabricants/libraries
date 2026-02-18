import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesComponent } from './images.component';
import { NgxProgressDirective } from 'ngx-progress';
import { HighlightModule, provideHighlightOptions } from 'ngx-highlightjs';
import { ExampleComponent } from 'projects/demo/src/app/components/example/example.component';
import { HIGHLIGHT_PROVIDER_OPTIONS } from 'projects/demo/src/app/consts/highlight-provider-options';

describe('ImagesComponent', () => {
  let component: ImagesComponent;
  let fixture: ComponentFixture<ImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesComponent],
      imports: [NgxProgressDirective, HighlightModule, ExampleComponent],
      providers: [provideHighlightOptions(HIGHLIGHT_PROVIDER_OPTIONS)],
    });
    fixture = TestBed.createComponent(ImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
