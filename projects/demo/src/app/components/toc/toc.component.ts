import { Component, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TOCItem } from '../../classes/tocItem';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { convert } from 'url-slug';
import BiMap from 'bidirectional-map';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { ScrollSpyService } from '../../services/scroll-spy.service';

@Component({
  selector: 'demo-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class TocComponent implements OnInit {
  @Input({ required: true })
  public items: TOCItem[] = [];

  protected slugs = new BiMap<TOCItem>();
  protected isActive = false;

  private pageRendered$ = new BehaviorSubject(false);

  constructor(private activatedRoute: ActivatedRoute, protected scrollSpyService: ScrollSpyService) {
    combineLatest([this.activatedRoute.fragment, this.pageRendered$]).pipe(takeUntilDestroyed()).subscribe(([fragment]) => {
      if (fragment) {
        const itemForSlug = this.slugs.get(fragment);
        if (itemForSlug) {
          this.scrollTo(itemForSlug);
        }
      }
    });
  }

  ngOnInit() {
    for (const item of this.items) {
      const slug = convert(item.name);
      this.slugs.set(slug, item);
      this.scrollSpyService.watchElement(item.el);
    }

    // ? Wait for complete render of every components before scrolling to elements
    setTimeout(() => {
      this.pageRendered$.next(true);
    });
  }

  scrollTo(item: TOCItem) {
    item.el.scrollIntoView();
  }
}
