import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
