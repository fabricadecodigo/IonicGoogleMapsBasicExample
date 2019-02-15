import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo1Page } from './exemplo1.page';

describe('Exemplo1Page', () => {
  let component: Exemplo1Page;
  let fixture: ComponentFixture<Exemplo1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
