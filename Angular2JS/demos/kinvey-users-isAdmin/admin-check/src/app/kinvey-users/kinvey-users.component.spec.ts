import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KinveyUsersComponent } from './kinvey-users.component';

describe('KinveyUsersComponent', () => {
  let component: KinveyUsersComponent;
  let fixture: ComponentFixture<KinveyUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KinveyUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KinveyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
