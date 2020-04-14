import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeMapEntryComponent } from './code-map-entry.component';

describe('CodeMapEntryComponent', () => {
  let component: CodeMapEntryComponent;
  let fixture: ComponentFixture<CodeMapEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeMapEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeMapEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
