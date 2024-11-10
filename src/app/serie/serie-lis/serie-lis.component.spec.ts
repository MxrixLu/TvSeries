/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SerieLisComponent } from './serie-lis.component';

describe('SerieLisComponent', () => {
  let component: SerieLisComponent;
  let fixture: ComponentFixture<SerieLisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieLisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
