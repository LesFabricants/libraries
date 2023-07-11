import { Component } from '@angular/core';
import { NgxFlexLimitterModule } from 'ngx-flex-limitter';
import { ExampleBaseComponent } from 'projects/demo/src/app/base/example.base.component';
import { ExampleComponent } from 'projects/demo/src/app/components/example/example.component';

@Component({
  selector: 'demo-flex-limitter-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
  standalone: true,
  imports: [NgxFlexLimitterModule, ExampleComponent],
})
export class SimpleComponent extends ExampleBaseComponent {
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

  sourceCode = [
    {
      name: 'html',
      code: `<ngx-flex-limitter
  class="item-list"
  [items]="items"
  [totalLines]="totalLines"
>
  <ng-template ngxFlexLimitterItem let-item>
    <div class="item">{{ item.value }}</div>
  </ng-template>
  <ng-template ngxFlexLimitterExpand let-amount>
    <button type="button" class="expand-button" (click)="expand()">
      +{{ amount }}
    </button>
  </ng-template>
  <ng-template ngxFlexLimitterCollapse>
    <button type="button" class="collapse-button" (click)="collapse()">
      -
    </button>
  </ng-template>
</ngx-flex-limitter>`,
    },
    {
      name: 'ts',
      code: `items = [
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
  this.totalLines += 1; // this will expand the list line by line
  // we could also expand the list completely by setting totalLines to 'Infinity'
}

collapse() {
  this.totalLines = this.baseTotalLines;
  // this will collapse the list back to the base amount of lines
}`,
    },
    {
      name: 'scss',
      code: `.item-list {
  width: 200px;
  gap: 10px;
}

.expand-button,
.collapse-button {
  background-color: transparent;
  border: 2px solid var(--secondary);
  border-radius: 5px;
  cursor: pointer;
}`,
    }
  ];

  baseTotalLines = 3;
  totalLines = this.baseTotalLines;

  expand() {
    this.totalLines += 1; // this will expand the list line by line
    // we could also expand the list completely by setting totalLines to `Infinity`
  }

  collapse() {
    this.totalLines = this.baseTotalLines; // this will collapse the list back to the base amount of lines
  }
}
