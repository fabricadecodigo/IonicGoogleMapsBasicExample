import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo4Page } from './exemplo4.page';

describe('Exemplo4Page', () => {
  let component: Exemplo4Page;
  let fixture: ComponentFixture<Exemplo4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
