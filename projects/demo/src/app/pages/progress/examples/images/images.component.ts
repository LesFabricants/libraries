import { Component } from '@angular/core';
import { ExampleBaseComponent } from 'projects/demo/src/app/base/example.base.component';

@Component({
    selector: 'demo-progress-images',
    templateUrl: './images.component.html',
    styleUrls: ['./images.component.scss'],
    standalone: false
})
export class ImagesComponent extends ExampleBaseComponent {
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
  class="horizontal-progress-bar"
  *ngxProgress="
    let percentages of ['reviewed', 'pending'];
    in: answers;
    key: 'status'
  "
>
  <img
    class="progress-item dark-blue"
    [style.width.%]="percentages[0]"
    src="https://picsum.photos/200/50"
    alt=""
  />
  <img
    class="progress-item cyan"
    [style.width.%]="percentages[1]"
    src="https://picsum.photos/100/50"
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
