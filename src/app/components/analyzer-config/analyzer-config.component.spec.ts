import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerConfigComponent } from './analyzer-config.component';

describe('AnalyzerConfigComponent', () => {
  let component: AnalyzerConfigComponent;
  let fixture: ComponentFixture<AnalyzerConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzerConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
