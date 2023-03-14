import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxProgressDirective } from 'projects/ngx-progress/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxProgressDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
