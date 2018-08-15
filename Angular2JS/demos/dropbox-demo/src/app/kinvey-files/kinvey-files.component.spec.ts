import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinveyFilesComponent } from './kinvey-files.component';

describe('KinveyFilesComponent', () => {
  let component: KinveyFilesComponent;
  let fixture: ComponentFixture<KinveyFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinveyFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinveyFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
