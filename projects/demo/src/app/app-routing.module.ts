import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'progress',
  },
  {
    path: 'progress',
    loadChildren: () =>
      import('./pages/progress/progress.module').then((m) => m.ProgressModule),
  },
  {
    path: 'flex-limitter',
    loadChildren: () =>
      import('./pages/flex-limitter/flex-limitter.module').then((m) => m.FlexLimitterModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
