import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressComponent } from './progress.component';
import { KeyedComponent } from './examples/keyed/keyed.component';
import { ComplexGroupingComponent } from './examples/complex-grouping/complex-grouping.component';
import { ImagesComponent } from './examples/images/images.component';
import { VerticalComponent } from './examples/vertical/vertical.component';
import { WavyComponent } from './examples/wavy/wavy.component';

import { NgxProgressDirective } from 'ngx-progress';
import { HighlightModule, provideHighlightOptions } from 'ngx-highlightjs';
import { ExampleComponent } from '../../components/example/example.component';
import { ShowcaseComponent } from '../../components/showcase/showcase.component';
import { DirectivesModule } from '../../directives/directives.module';
import { HIGHLIGHT_PROVIDER_OPTIONS } from '../../consts/highlight-provider-options';

describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProgressComponent,
        KeyedComponent,
        ComplexGroupingComponent,
        ImagesComponent,
        VerticalComponent,
        WavyComponent,
      ],
      imports: [
        NgxProgressDirective,
        DirectivesModule,
        HighlightModule,
        ExampleComponent,
        ShowcaseComponent,
      ],
      providers: [provideHighlightOptions(HIGHLIGHT_PROVIDER_OPTIONS)],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
