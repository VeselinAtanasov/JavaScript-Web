import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDropboxFinalComponent } from './demo-dropbox-final.component';

describe('DemoDropboxFinalComponent', () => {
  let component: DemoDropboxFinalComponent;
  let fixture: ComponentFixture<DemoDropboxFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDropboxFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDropboxFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
