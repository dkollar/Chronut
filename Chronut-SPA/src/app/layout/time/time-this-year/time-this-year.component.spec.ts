/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimeThisYearComponent } from './time-this-year.component';

describe('TimeThisYearComponent', () => {
  let component: TimeThisYearComponent;
  let fixture: ComponentFixture<TimeThisYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeThisYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeThisYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
