import { Component, ContentChildren, ElementRef, QueryList } from '@angular/core';

import { HeadingDirective } from '../../directives/heading.directive';
import { TocComponent } from '../toc/toc.component';
import { TOCItem } from '../../classes/tocItem';

@Component({
    selector: 'demo-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.scss'],
    imports: [TocComponent]
})
export class ShowcaseComponent {
  @ContentChildren(HeadingDirective, {
    read: ElementRef
  }) headings!: QueryList<ElementRef<HTMLHeadingElement>>;

  protected tableOfContent: TOCItem[] = [];

  ngAfterContentInit() {
    this.generateTableOfContent();
  }

  generateTableOfContent() {
    let newTOC: TOCItem[] = [];
    let currentItem: TOCItem | null = null;
    this.headings.forEach(({ nativeElement: headingEl }) => {
      const newTOCItem = new TOCItem(headingEl);
      if (!currentItem) {
        newTOC.push(newTOCItem);
      } else if (newTOCItem.level > currentItem.level) {
        // go down a level
        currentItem.addSubitem(newTOCItem);
      } else if (newTOCItem.level === currentItem.level) {
        // same level
        currentItem.parent?.addSubitem(newTOCItem);
      } else {
        // go up multiple levels until we reach the one we want
        let newItem = currentItem.parent!;
        while (newItem?.parent && newTOCItem.level < newItem.level) {
          newItem = newItem.parent;
        };

        // check if we need to go all the way up to the top level
        if (!newItem.parent && newTOCItem.level <= newItem.level) {
          newTOC.push(newTOCItem);
        } else {
          newItem.addSubitem(newTOCItem);
        }
      }
      currentItem = newTOCItem;
      this.tableOfContent = newTOC;
    });
  }
}
