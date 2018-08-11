import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinveyUsersLoginComponent } from './kinvey-users-login.component';

describe('KinveyUsersLoginComponent', () => {
  let component: KinveyUsersLoginComponent;
  let fixture: ComponentFixture<KinveyUsersLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinveyUsersLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinveyUsersLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
