import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCodesComponent } from './map-codes.component';

describe('MapCodesComponent', () => {
  let component: MapCodesComponent;
  let fixture: ComponentFixture<MapCodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
