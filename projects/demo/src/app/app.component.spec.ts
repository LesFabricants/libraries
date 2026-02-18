import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { ScrollSpyService } from './services/scroll-spy.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), SidebarComponent, HeaderComponent],
      declarations: [AppComponent],
      providers: [
        {
          provide: HIGHLIGHT_OPTIONS,
          useValue: {
            coreLibraryLoader: () => import('highlight.js/lib/core'),
            languages: {
              typescript: () => import('highlight.js/lib/languages/typescript'),
              css: () => import('highlight.js/lib/languages/css'),
              xml: () => import('highlight.js/lib/languages/xml'),
            },
            themePath:
              'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/vs2015.min.css',
          },
        },
        ScrollSpyService,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
