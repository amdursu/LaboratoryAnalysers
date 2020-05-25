import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpretationCodesComponent } from './interpretation-codes.component';

describe('InterpretationCodesComponent', () => {
  let component: InterpretationCodesComponent;
  let fixture: ComponentFixture<InterpretationCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpretationCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpretationCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
