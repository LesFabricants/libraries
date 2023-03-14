import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxProgressDirective } from './ngx-progress.directive';

@Component({
  selector: 'ngx-progress-test',
  template: `
    <div
      class="progress-bar"
      *ngxProgress="let percentages of [reviewed, pending]; in: answers"
    >
      <div class="progress-item-1" [style.width.%]="percentages[0]"></div>
      <div class="progress-item-2" [style.width.%]="percentages[1]"></div>
    </div>
  `,
  styles: [
    `
      .progress-bar {
        height: 10px;
        width: 100%;
        background-color: #e9ecef;
      }
      .progress-item-1 {
        background-color: #28a745;
      }
      .progress-item-2 {
        background-color: #dc3545;
      }
    `,
  ],
})
export class DummyComponent {
  @Input() answers: any[] = [];
  @Input() reviewed: any[] = [];
  @Input() pending: any[] = [];
}

describe('NgxProgressDirective', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DummyComponent, NgxProgressDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    component.answers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    component.reviewed = [1, 2, 3, 4, 5, 6];
    component.pending = [7, 8, 9, 10];
    fixture.detectChanges();
  });

  it('should have parts with the correct size', () => {
    const firstPart = fixture.debugElement.query(By.css('.progress-item-1'));
    const secondPart = fixture.debugElement.query(By.css('.progress-item-2'));
    console.log(fixture.debugElement.nativeElement);
    expect(firstPart.nativeElement.style.width).toBe('60%');
    expect(secondPart.nativeElement.style.width).toBe('40%');
  });
});
