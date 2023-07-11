import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLimitterComponent } from './flex-limitter.component';

const routes: Routes = [
  {
    path: '',
    component: FlexLimitterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexLimitterRoutingModule { }
