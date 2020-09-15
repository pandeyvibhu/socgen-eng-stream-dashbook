import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbookNavComponent } from './dashbook-nav.component';

describe('DashbookNavComponent', () => {
  let component: DashbookNavComponent;
  let fixture: ComponentFixture<DashbookNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbookNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbookNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
