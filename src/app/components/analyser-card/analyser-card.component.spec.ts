import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyserCardComponent } from './analyser-card.component';

describe('AnalyserCardComponent', () => {
  let component: AnalyserCardComponent;
  let fixture: ComponentFixture<AnalyserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
