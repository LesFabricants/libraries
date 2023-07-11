import { Component } from '@angular/core';
import { ExampleBaseComponent } from 'projects/demo/src/app/base/example.base.component';

@Component({
  selector: 'demo-progress-complex-grouping',
  templateUrl: './complex-grouping.component.html',
  styleUrls: ['./complex-grouping.component.scss']
})
export class ComplexGroupingComponent extends ExampleBaseComponent {
  answers = [
    { value: 10 },
    { value: 403 },
    { value: 74 },
    { value: 28 },
    { value: 106 },
    { value: 1 },
    { value: 139 },
    { value: 88 },
    { value: 14 },
    { value: 75 },
    { value: 48 },
    { value: 44 },
  ];
  lessThan100 = this.answers.filter((answer) => answer.value < 100);
  moreThan100 = this.answers.filter((answer) => answer.value > 100);

  sourceCode = [
    {
      name: 'html',
      code: `<div
  class="horizontal-progress-bar"
  *ngxProgress="let percentages of [lessThan100, moreThan100]; in: answers"
>
  <div class="progress-item dark-blue" [style.width.%]="percentages[0]"></div>
  <div class="progress-item cyan" [style.width.%]="percentages[1]"></div>
</div>`,
    },
    {
      name: 'ts',
      code: `answers = [
  { value: 10 },
  { value: 403 },
  { value: 74 },
  { value: 28 },
  { value: 106 },
  { value: 1 },
  { value: 139 },
  { value: 88 },
  { value: 14 },
  { value: 75 },
  { value: 48 },
  { value: 44 },
];
lessThan100 = this.answers.filter((answer) => answer.value < 100);
moreThan100 = this.answers.filter((answer) => answer.value > 100);`,
    },
    {
      name: 'scss',
      code: `.horizontal-progress-bar {
  position: relative;
  width: 300px;
  height: 50px;

  .progress-item {
    display: inline-block;
    height: inherit;

    &.dark-blue {
      background-color: var(--secondary);
    }

    &.cyan {
      background-color: var(--primary);
    }
  }
}`,
    }
  ];
}
