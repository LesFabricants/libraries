import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import { ProgressRoutingModule } from './progress.routing';
import { NgxProgressDirective } from 'ngx-progress';

@NgModule({
  declarations: [ProgressComponent],
  imports: [CommonModule, ProgressRoutingModule, NgxProgressDirective],
})
export class ProgressModule {}
