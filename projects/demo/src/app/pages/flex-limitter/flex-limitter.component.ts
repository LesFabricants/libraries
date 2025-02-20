import { Component } from '@angular/core';

@Component({
    selector: 'demo-flex-limitter',
    templateUrl: './flex-limitter.component.html',
    styleUrls: ['./flex-limitter.component.scss'],
    standalone: false
})
export class FlexLimitterComponent {
  npmInstallCode = "npm i @lesfabricants/ngx-flex-limitter";

  angularModuleInstallCode = `import { NgxFlexLimitterModule } from 'ngx-flex-limitter';

@NgModule({
  declarations: [...],
  imports: [..., NgxFlexLimitterModule],
})
export class AppModule { }`;

  angularStandaloneInstallCode = `import { Component } from '@angular/core';
import { NgxFlexLimitterModule } from 'ngx-flex-limitter';

@Component({
  selector: 'lorem-ipsum',
  templateUrl: './lorem-ipsum.component.html',
  styleUrls: ['./lorem-ipsum.component.scss'],
  standalone: true,
  imports: [NgxFlexLimitterModule],
})
export class LoremIpsumComponent {}`;

  itemTemplateCode = `<ng-template ngxFlexLimitterItem let-item>
  <div class="item">{{ item.value }}</div>
</ng-template>`;

  itemTemplateVariableCode = `<ng-template ngxFlexLimitterItem let-hello>
  <div class="item">{{ hello.value }}</div>
</ng-template>`;

  expandTemplateCode = `<ng-template ngxFlexLimitterExpand let-amount>
  <div class="expand-element">+{{ amount }}</div>
</ng-template>`;

  collapseTemplateCode = `<ng-template ngxFlexLimitterCollapse>
  <div class="collapse-element">-</div>
</ng-template>`;
}
