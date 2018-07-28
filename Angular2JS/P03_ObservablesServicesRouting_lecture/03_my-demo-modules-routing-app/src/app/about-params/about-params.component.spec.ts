import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutParamsComponent } from './about-params.component';

describe('AboutParamsComponent', () => {
  let component: AboutParamsComponent;
  let fixture: ComponentFixture<AboutParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
