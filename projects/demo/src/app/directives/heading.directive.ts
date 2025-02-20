import { Directive } from '@angular/core';

@Directive({
    selector: 'h1, h2, h3, h4, h5, h6',
    standalone: false
})
export class HeadingDirective {

  constructor() { }

}
