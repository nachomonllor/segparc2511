import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfiltrarComponent } from './formfiltrar.component';

describe('FormfiltrarComponent', () => {
  let component: FormfiltrarComponent;
  let fixture: ComponentFixture<FormfiltrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormfiltrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfiltrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
