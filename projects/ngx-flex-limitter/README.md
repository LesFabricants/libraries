# NgxFlexLimitter

A library for limiting the number of lines in a flex container.

```ts
items = [
  {
    value: "item 1",
  },
  {
    value: "item 2",
  },
  {
    value: "really long item 3",
  },
  {
    value: "really really long item 3",
  },
  {
    value: "wow now THIS is a really long item 3",
  },
];
```

```html
<ngx-flex-limitter
  class="item-list"
  [items]="items"
  [totalLines]="3"
>
  <ng-template ngxFlexLimitterItem let-item>
    <div class="item">{{ item.value }}</div>
  </ng-template>
  <ng-template ngxFlexLimitterExpand let-amount>
    <div class="expand-button" (click)="">+{{ amount }}</div>
  </ng-template>
  <ng-template ngxFlexLimitterCollapse>
    <div class="collapse-button">-</div>
  </ng-template>
</oney-flex-limitter>
```

## How to use

```ts
import { NgxFlexLimitterModule } from "ngx-flex-limitter";

@NgModule({
  imports: [NgxFlexLimitterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

you can now use `ngx-flex-limitter` as the flex container.

```html
<ngx-flex-limitter
  class="item-list"
  [items]="items"
  [totalLines]="3"
>
</oney-flex-limitter>
```

The flex container supports the following attributes:

- `class`: a string of classes to add to the flex container.
- `[items]`: the items that will be displayed.
- `[totalLines]`: the total number of lines that the flex container will have before collapsing items.

The component can contain the following templates:

- `ngxFlexLimitterItem`: the template that will be used to display each item.

```html
<ng-template ngxFlexLimitterItem let-item>
  <div class="item">{{ item.value }}</div>
</ng-template>
```

you can access the items in your item list by using the implicit [template variable](https://angular.io/guide/template-reference-variables#template-input-variable) `let-item`.  
_Note: since this variable is implicit, this can be called anything, as long as it starts with `let` eg:`let-hello`, `let-world`, etc._

```html
<ng-template ngxFlexLimitterItem let-hello>
  <div class="item">{{ hello.value }}</div>
</ng-template>
```

- `ngxFlexLimitterExpand`: the template that will be used to represent the expand element.

```html
<ng-template ngxFlexLimitterExpand let-amount>
  <div class="expand-element">+{{ amount }}</div>
</ng-template>
```

the expand element will be displayed when the amount of items in your list overflows the total number of lines.  
furthermore, the amount of items hidden is passed to the template as an implicit template variable just like with `ngxFlexLimitterItem`.  
**Note: this doesn't act as a button by default, clicking on this will not display the hidden items.**

- `ngxFlexLimitterCollapse`: the template that will be used to represent the collapse element.

```html
<ng-template ngxFlexLimitterCollapse>
  <div class="collapse-element">-</div>
</ng-template>
```

this element is only displayed when ALL of the items that were originally hidden are displayed.

## Making the expand and collapse elements buttons

In order to make the expand and collapse elements buttons, you can update the `totalLines` attribute to dynamically extend or collapse the list.

```ts
@Component({
  selector: "app-root",
})
export class AppComponent {
  items = [
    "item 1",
    "item 2",
    "really long item 3",
    "really really long item 3",
    "wow now THIS is a really long item 3",
  ];

  baseTotalLines = 3;
  totalLines = baseTotalLines;

  expand() {
    this.totalLines += 1; // this will expand the list line by line
    // we could also expand the list completely by setting totalLines to `Infinity`
  }

  collapse() {
    this.totalLines = baseTotalLines; // this will collapse the list back to the base amount of lines
  }
}
```

```html
<ngx-flex-limitter class="item-list" [items]="items" [totalLines]="totalLines">
  <ng-template ngxFlexLimitterItem let-item>
    <div class="item">{{ item }}</div>
  </ng-template>
  <ng-template ngxFlexLimitterExpand let-amount>
    <div class="expand-button" (click)="expand()">+{{ amount }}</div>
  </ng-template>
  <ng-template ngxFlexLimitterCollapse>
    <div class="collapse-button" (click)="collapse()">-</div>
  </ng-template></ngx-flex-limitter
>
```

_This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0._
