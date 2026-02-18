import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexLimitterComponent } from './flex-limitter.component';
import { ShowcaseComponent } from '../../components/showcase/showcase.component';
import { HighlightModule, provideHighlightOptions } from 'ngx-highlightjs';
import { SimpleComponent } from './examples/simple/simple.component';
import { DirectivesModule } from '../../directives/directives.module';
import { CommonModule } from '@angular/common';
import { FlexLimitterRoutingModule } from './flex-limitter.routing';
import { RouterModule } from '@angular/router';
import { HIGHLIGHT_PROVIDER_OPTIONS } from '../../consts/highlight-provider-options';

describe('FlexLimitterComponent', () => {
  let component: FlexLimitterComponent;
  let fixture: ComponentFixture<FlexLimitterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexLimitterComponent],
      imports: [
        RouterModule.forRoot([]),
        CommonModule,
        FlexLimitterRoutingModule,
        ShowcaseComponent,
        DirectivesModule,
        HighlightModule,
        SimpleComponent,
      ],
      providers: [provideHighlightOptions(HIGHLIGHT_PROVIDER_OPTIONS)],
    });
    fixture = TestBed.createComponent(FlexLimitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
