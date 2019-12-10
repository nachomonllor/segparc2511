import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMostrarComponent } from './form-mostrar.component';

describe('FormMostrarComponent', () => {
  let component: FormMostrarComponent;
  let fixture: ComponentFixture<FormMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
