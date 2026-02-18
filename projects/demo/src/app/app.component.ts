import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollSpyService } from './services/scroll-spy.service';

@Component({
  selector: '[demo-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  @ViewChild('scroll', { read: ElementRef })
  scroll: ElementRef<HTMLElement> | null = null;

  constructor(private scrollSpyService: ScrollSpyService) {}

  ngAfterViewInit() {
    if (this.scroll) {
      this.scrollSpyService.defineScrollingContext(this.scroll?.nativeElement);
    }
  }
}
