import { Directive, Input } from '@angular/core';

@Directive()
export class ExampleComponent {
  @Input() public showCode = true;
}