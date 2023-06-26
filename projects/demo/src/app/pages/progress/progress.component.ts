import { Component } from '@angular/core';

@Component({
  selector: 'demo-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
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

  npmInstallCode = "npm i @lesfabricants/ngx-progress";

  angularModuleInstallCode = `import { NgxProgressDirective } from 'ngx-progress';

@NgModule({
  declarations: [...],
  imports: [..., NgxProgressDirective],
})
export class AppModule { }`;

  angularStandaloneInstallCode = `import { Component } from '@angular/core';
import { NgxProgressDirective } from 'ngx-progress';

@Component({
  selector: 'lorem-ipsum',
  templateUrl: './lorem-ipsum.component.html',
  styleUrls: ['./lorem-ipsum.component.scss'],
  standalone: true,
  imports: [NgxProgressDirective],
})
export class LoremIpsumComponent {}`;
}
