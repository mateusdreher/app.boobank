import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastInvalidInputComponent } from './toast-invalid-input.component';

describe('ToastInvalidInputComponent', () => {
  let component: ToastInvalidInputComponent;
  let fixture: ComponentFixture<ToastInvalidInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastInvalidInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastInvalidInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
