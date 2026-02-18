import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent } from './simple.component';
import { ExampleComponent } from 'projects/demo/src/app/components/example/example.component';
import { HighlightModule, provideHighlightOptions } from 'ngx-highlightjs';
import { NgxFlexLimitterModule } from 'ngx-flex-limitter';
import { HIGHLIGHT_PROVIDER_OPTIONS } from 'projects/demo/src/app/consts/highlight-provider-options';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SimpleComponent,
        HighlightModule,
        NgxFlexLimitterModule,
        ExampleComponent,
      ],
      providers: [provideHighlightOptions(HIGHLIGHT_PROVIDER_OPTIONS)],
    });
    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
