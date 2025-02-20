import { Component } from '@angular/core';
import { ExampleBaseComponent } from 'projects/demo/src/app/base/example.base.component';

@Component({
    selector: 'demo-progress-vertical',
    templateUrl: './vertical.component.html',
    styleUrls: ['./vertical.component.scss'],
    standalone: false
})
export class VerticalComponent extends ExampleBaseComponent {
  answers = [
    {
      status: 'pending',
      comment: 'answer 1',
    },
    {
      status: 'pending',
      comment: 'answer 2',
    },
    {
      status: 'reviewed',
      comment: 'answer 3',
    },
  ];

  sourceCode = [
    {
      name: 'html',
      code: `<div
  class="vertical-progress-bar"
  *ngxProgress="
    let percentages of ['reviewed', 'pending'];
    in: answers;
    key: 'status'
  "
>
  <img
    class="progress-item dark-blue"
    [style.height.%]="percentages[0]"
    src="https://picsum.photos/50/200"
    alt=""
  />
  <img
    class="progress-item cyan"
    [style.height.%]="percentages[1]"
    src="https://picsum.photos/50/100"
    alt=""
  />
</div>`,
    },
    {
      name: 'ts',
      code: `answers = [
  {
    status: 'pending',
    comment: 'answer 1',
  },
  {
    status: 'pending',
    comment: 'answer 2',
  },
  {
    status: 'reviewed',
    comment: 'answer 3',
  },
];`,
    },
    {
      name: 'scss',
      code: `.vertical-progress-bar {
  position: relative;
  height: 300px;
  width: 50px;

  .progress-item {
    display: block;
    width: inherit;

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
