import { Directive, Input } from '@angular/core';

@Directive()
export class ExampleBaseComponent {
  @Input() public showCode = true;
}