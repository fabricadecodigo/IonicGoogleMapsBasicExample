import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo3Page } from './exemplo3.page';

describe('Exemplo3Page', () => {
  let component: Exemplo3Page;
  let fixture: ComponentFixture<Exemplo3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exemplo3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exemplo3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
