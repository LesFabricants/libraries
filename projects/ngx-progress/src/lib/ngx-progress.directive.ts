import {
  Directive,
  Input,
  Optional,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ngxProgress]',
  standalone: true,
})
export class NgxProgressDirective {
  @Input() ngxProgressOf: any[] = [];
  @Input() ngxProgressIn: any[] = [];
  @Input() @Optional() ngxProgressKey: string = '';

  public percentage: number[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    if (this.ngxProgressKey) {
      this.calculatePercentageBasedOnKey();
    } else {
      this.calculatePercentageBasedOnItems();
    }

    this.viewContainer.createEmbeddedView(this.templateRef, {
      $implicit: this.percentage,
    });
  }

  calculatePercentageBasedOnKey() {
    for (const value of this.ngxProgressOf) {
      const matchingItems = this.ngxProgressIn.filter(
        (item) => item[this.ngxProgressKey] === value
      );
      this.percentage.push(
        (matchingItems.length / this.ngxProgressIn.length) * 100
      );
    }
  }

  calculatePercentageBasedOnItems() {
    for (const items of this.ngxProgressOf) {
      this.percentage.push((items.length / this.ngxProgressIn.length) * 100);
    }
  }
}
