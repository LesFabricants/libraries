import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxProgressDirective } from 'projects/ngx-progress/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarComponent,
    HeaderComponent,
    NgxProgressDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
