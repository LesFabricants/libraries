import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLimitterComponent } from './flex-limitter.component';
import { FlexLimitterItemDirective } from './flex-limitter-item/flex-limitter-item.directive';
import { FlexLimitterExpandDirective } from './flex-limitter-expand/flex-limitter-expand.directive';
import { FlexLimitterCollapseDirective } from './flex-limitter-collapse/flex-limitter-collapse.directive';

@NgModule({
  declarations: [
    FlexLimitterComponent,
    FlexLimitterItemDirective,
    FlexLimitterExpandDirective,
    FlexLimitterCollapseDirective,
  ],
  imports: [CommonModule],
  exports: [
    FlexLimitterComponent,
    FlexLimitterItemDirective,
    FlexLimitterExpandDirective,
    FlexLimitterCollapseDirective,
  ],
})
export class FlexLimitterModule {}
