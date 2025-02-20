import { Component } from '@angular/core';
import { ExampleBaseComponent } from 'projects/demo/src/app/base/example.base.component';

@Component({
    selector: 'demo-progress-wavy',
    templateUrl: './wavy.component.html',
    styleUrls: ['./wavy.component.scss'],
    standalone: false
})
export class WavyComponent extends ExampleBaseComponent {
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
  class="wavy horizontal-progress-bar"
  *ngxProgress="let percentages of ['reviewed']; in: answers; key: 'status'"
>
  <div class="progress-item cyan" [style.width.%]="percentages[0]"></div>
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

    &.cyan {
      background-color: var(--primary);
    }
  }
}

.wavy {
  --size: 40px;
  --b: 10px;
  --p: 38.75px;
  --R: calc(55.9px + var(--b) / 2);
  --_g: #0000 calc(99% - var(--b)), #000 calc(101% - var(--b)) 99%, #0000 101%;
  mask: radial-gradient(
        var(--R) at left 50% bottom calc(-1 * var(--p)),
        var(--_g)
      )
      calc(50% - 2 * var(--size)) calc(50% - var(--size) / 2 - var(--b) / 2) /
      calc(4 * var(--size)) calc(var(--size) + var(--b)),
    radial-gradient(var(--R) at left 50% top calc(-1 * var(--p)), var(--_g)) 50%
      calc(50% + var(--size) / 2 + var(--b) / 2) / calc(4 * var(--size))
      calc(var(--size) + var(--b));
  mask-repeat: repeat-x;
  background: #ddd;
}`,
    }
  ];
}
