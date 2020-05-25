import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadLogFilesComponent } from './download-log-files.component';

describe('DownloadLogFilesComponent', () => {
  let component: DownloadLogFilesComponent;
  let fixture: ComponentFixture<DownloadLogFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadLogFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadLogFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
