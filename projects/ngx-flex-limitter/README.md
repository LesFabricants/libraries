# ngx-flex-limitter

A library for limiting the number of lines in a flex container, complete with customizable expand and collapse.

![Flex limitter preview](./flex-limitter.gif)

```html
<ngx-flex-limitter [items]="items" [totalLines]="3">
  <ng-template ngxFlexLimitterItem let-item>
    <div class="item">{{ item.value }}</div>
  </ng-template>
  <ng-template ngxFlexLimitterExpand let-amount>
    <button (click)="expand()">+{{ amount }}</button>
  </ng-template>
  <ng-template ngxFlexLimitterCollapse>
    <button (click)="collapse()">-</button>
  </ng-template>
</ngx-flex-limitter>
```

```ts
items = [
  { value: "Leo" },
  { value: "Paul" },
  { value: "Marie" },
  { value: "Nathan" },
  { value: "Camilla" },
  { value: "Jeanne" },
  { value: "Raz" },
  { value: "Matt" },
  { value: "Laureen" },
  { value: "Augustin" },
  { value: "Katie" },
  { value: "Liam" },
  { value: "Emma" },
  { value: "Noah" },
  { value: "Olivia" },
  { value: "William" },
  { value: "Ava" },
  { value: "James" },
  { value: "Isabella" },
  { value: "Logan" },
  { value: "Sophia" },
];

baseTotalLines = 3;
totalLines = this.baseTotalLines;

expand() {
  this.totalLines += 1;
}

collapse() {
  this.totalLines = this.baseTotalLines;
}
```

## How to use

The library documentation is available over at
<https://lesfabricants.github.io/libraries/#/flex-limitter>

&nbsp;

_This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0._
