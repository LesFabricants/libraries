import { Component } from '@angular/core';

@Component({
  selector: 'demo-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  title = 'demo';
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
  reviewed = this.answers.filter((answer) => answer.status === 'reviewed');
  pending = this.answers.filter((answer) => answer.status === 'pending');
}
