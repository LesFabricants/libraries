import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLimitterRoutingModule } from './flex-limitter.routing';
import { FlexLimitterComponent } from './flex-limitter.component';
import { ShowcaseComponent } from '../../components/showcase/showcase.component';
import { SimpleComponent } from './examples/simple/simple.component';
import { DirectivesModule } from '../../directives/directives.module';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    FlexLimitterComponent,
  ],
  imports: [
    CommonModule,
    FlexLimitterRoutingModule,
    ShowcaseComponent,
    DirectivesModule,
    HighlightModule,
    SimpleComponent
  ]
})
export class FlexLimitterModule { }
