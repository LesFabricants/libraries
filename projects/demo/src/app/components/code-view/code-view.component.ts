import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'demo-code-view',
  templateUrl: './code-view.component.html',
  styleUrls: ['./code-view.component.scss'],
  imports: [CommonModule, HighlightModule],
})
export class CodeViewComponent implements OnInit {
  @Input()
  files: { name: string; code: string }[] = [];

  currentFile?: { name: string; code: string };

  ngOnInit() {
    this.currentFile = this.files[0];
  }

  changeCurrentFile(file: { name: string; code: string }) {
    this.currentFile = file;
  }
}
