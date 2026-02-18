import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHighlightOptions } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ScrollSpyService } from './services/scroll-spy.service';
import { HIGHLIGHT_PROVIDER_OPTIONS } from './consts/highlight-provider-options';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SidebarComponent, HeaderComponent],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHighlightOptions(HIGHLIGHT_PROVIDER_OPTIONS),
    ScrollSpyService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
