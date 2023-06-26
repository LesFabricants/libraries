import { Component, Input } from '@angular/core';
import { CodeViewComponent } from '../code-view/code-view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'demo-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
  standalone: true,
  imports: [CommonModule, CodeViewComponent],
})
export class ExampleComponent {
  @Input() public showCode = true;
  @Input() public sourceCode: { name: string; code: string }[] = [];
}
