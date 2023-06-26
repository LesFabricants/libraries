import { Injectable } from '@angular/core';
import { ReplaySubject, Subscription, auditTime, distinctUntilChanged, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService {
  private scrollingContext: HTMLElement | null = null;
  private watchedElements: HTMLElement[] = [];
  private activeElement = new ReplaySubject<HTMLElement>(1);
  private scrollSub: Subscription | null = null;

  public activeElement$ = this.activeElement.asObservable().pipe(distinctUntilChanged());

  public defineScrollingContext(el: HTMLElement) {
    if (this.scrollSub) {
      this.scrollSub.unsubscribe();
    }

    this.scrollingContext = el;
    this.scrollSub = fromEvent<UIEvent>(this.scrollingContext, "scroll").pipe(auditTime(25)).subscribe((e) => {
      if (e.target instanceof HTMLElement) {
        const hasScrolledToBottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 1;
        if (hasScrolledToBottom) {
          // ? if we're at the bottom, consider the last element as the one currently active
          this.findElementClosestToTop(e.target.scrollHeight);
        } else {
          this.findElementClosestToTop(e.target.scrollTop + e.target.offsetTop);
        }
      }
    });
  }

  public watchElement(el: HTMLElement) {
    this.watchedElements.push(el);
    this.watchedElements.sort((a, b) => a.offsetTop - b.offsetTop);
    this.findElementClosestToTop(0);
  }

  private findElementClosestToTop(scrollTop: number) {
    let newActiveElement = this.watchedElements[0];
    for (const el of this.watchedElements) {
      if (el.offsetTop <= scrollTop) {
        newActiveElement = el;
      }
    }

    this.activeElement.next(newActiveElement);
  }
}
