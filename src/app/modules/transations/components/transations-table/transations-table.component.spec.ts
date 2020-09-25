import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransationsTableComponent } from './transations-table.component';

describe('TransationsTableComponent', () => {
  let component: TransationsTableComponent;
  let fixture: ComponentFixture<TransationsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransationsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
