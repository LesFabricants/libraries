import { Component, Input } from '@angular/core';
import { CodeViewComponent } from '../code-view/code-view.component';


@Component({
    selector: 'demo-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
    imports: [CodeViewComponent]
})
export class ExampleComponent {
  @Input() public showCode = true;
  @Input() public sourceCode: { name: string; code: string }[] = [];
}
