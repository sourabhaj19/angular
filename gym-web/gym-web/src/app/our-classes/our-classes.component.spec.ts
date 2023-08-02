/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurClassesComponent } from './our-classes.component';

describe('OurClassesComponent', () => {
  let component: OurClassesComponent;
  let fixture: ComponentFixture<OurClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
