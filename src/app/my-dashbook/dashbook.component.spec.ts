import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbookComponent } from './dashbook.component';

describe('DashbookComponent', () => {
  let component: DashbookComponent;
  let fixture: ComponentFixture<DashbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
