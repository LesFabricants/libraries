import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { ProgressRoutingModule } from './progress.routing';
import { NgxProgressDirective } from 'ngx-progress';
import { KeyedComponent } from './examples/keyed/keyed.component';
import { ComplexGroupingComponent } from './examples/complex-grouping/complex-grouping.component';
import { ImagesComponent } from './examples/images/images.component';
import { VerticalComponent } from './examples/vertical/vertical.component';
import { WavyComponent } from './examples/wavy/wavy.component';
import { ExampleComponent } from '../../components/example/example.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ShowcaseComponent } from '../../components/showcase/showcase.component';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ProgressComponent,
    KeyedComponent,
    ComplexGroupingComponent,
    ImagesComponent,
    VerticalComponent,
    WavyComponent,
  ],
  imports: [
    CommonModule,
    ProgressRoutingModule,
    NgxProgressDirective,
    DirectivesModule,
    HighlightModule,
    ExampleComponent,
    ShowcaseComponent,
  ],
})
export class ProgressModule { }
