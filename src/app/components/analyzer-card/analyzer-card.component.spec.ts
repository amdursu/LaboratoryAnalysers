import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerCardComponent } from './analyzer-card.component';

describe('AnalyzerCardComponent', () => {
  let component: AnalyzerCardComponent;
  let fixture: ComponentFixture<AnalyzerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
