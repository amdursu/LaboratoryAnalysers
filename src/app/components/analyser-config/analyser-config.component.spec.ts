import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyserConfigComponent } from './analyser-config.component';

describe('AnalyserConfigComponent', () => {
  let component: AnalyserConfigComponent;
  let fixture: ComponentFixture<AnalyserConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyserConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyserConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
