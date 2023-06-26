import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'demo-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HighlightModule,
    TabViewModule,
  ],
})
export class CodeViewComponent {
  @Input()
  files: { name: string; code: string }[] = [];
}
