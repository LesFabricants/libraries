import {
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FlexLimitterCollapseDirective } from './flex-limitter-collapse/flex-limitter-collapse.directive';
import { FlexLimitterExpandDirective } from './flex-limitter-expand/flex-limitter-expand.directive';
import { FlexLimitterItemDirective } from './flex-limitter-item/flex-limitter-item.directive';

@Component({
    selector: 'ngx-flex-limitter',
    templateUrl: './flex-limitter.component.html',
    styleUrls: ['./flex-limitter.component.scss'],
    standalone: false
})
export class FlexLimitterComponent implements AfterViewInit, OnChanges {
  @Input() items: any[] = [];
  @Input() totalLines: number = Infinity;

  @ContentChild(FlexLimitterItemDirective, { read: TemplateRef })
  public itemTemplate: TemplateRef<any> | undefined;
  @ContentChild(FlexLimitterExpandDirective, { read: TemplateRef })
  public expandTemplate: TemplateRef<any> | undefined;
  @ContentChild(FlexLimitterCollapseDirective, { read: TemplateRef })
  public collapseTemplate: TemplateRef<any> | undefined;

  @ViewChild('innerViewContainer', { read: ViewContainerRef })
  public innerViewContainer!: ViewContainerRef;

  private linesComputed = false;
  private skippedItems = 0;

  private __initialBuild = true;
  private __isOverflowing = false;
  private __isViewInitialized = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      this.__isViewInitialized &&
      changes['totalLines'].currentValue !== changes['totalLines'].previousValue
    ) {
      this.buildView();
    }
  }

  ngAfterViewInit(): void {
    if (this.items.length && !this.linesComputed) {
      this.buildView();
      this.linesComputed = true;
    }
    this.__isViewInitialized = true;
  }

  buildView() {
    this.innerViewContainer.clear();
    if (this.itemTemplate) {
      this.computeLines();
    }
    if (this.expandTemplate && this.skippedItems > 0) {
      this.insertExpandTemplate();
    } else if (
      this.collapseTemplate &&
      this.__isOverflowing &&
      this.skippedItems === 0
    ) {
      this.insertCollapseTemplate();
    }
    this.__initialBuild = false;
  }

  computeLines() {
    let previousTop = -Infinity;
    let currentLine = 0;
    let itemIndex = 0;
    let limitReached = false;
    do {
      const itemElement = this.innerViewContainer.createEmbeddedView(
        this.itemTemplate!,
        {
          $implicit: this.items[itemIndex],
        }
      );
      itemElement.detectChanges();
      const itemElementNative: HTMLElement = itemElement.rootNodes[0];
      const itemElementTop = itemElementNative.offsetTop;
      if (itemElementTop !== previousTop) {
        currentLine++;
        previousTop = itemElementTop;
      }
      if (currentLine > this.totalLines) {
        itemElementNative.remove();
        limitReached = true;
        if (this.__initialBuild) {
          this.__isOverflowing = true;
        }
      } else {
        itemIndex++;
      }
    } while (!limitReached && itemIndex < this.items.length);

    this.skippedItems = this.items.length - itemIndex;
  }

  private insertExpandTemplate() {
    this.innerViewContainer.detach(this.innerViewContainer.length - 1);
    this.innerViewContainer.remove(this.innerViewContainer.length - 1);
    this.skippedItems++;
    const embeddedViewRef = this.innerViewContainer.createEmbeddedView(
      this.expandTemplate!,
      {
        $implicit: this.skippedItems,
      }
    );
    embeddedViewRef.detectChanges();
  }

  private insertCollapseTemplate() {
    const embeddedViewRef = this.innerViewContainer.createEmbeddedView(
      this.collapseTemplate!
    );
    embeddedViewRef.detectChanges();
  }
}
