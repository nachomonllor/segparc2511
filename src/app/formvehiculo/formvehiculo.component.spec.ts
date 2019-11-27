import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvehiculoComponent } from './formvehiculo.component';

describe('FormvehiculoComponent', () => {
  let component: FormvehiculoComponent;
  let fixture: ComponentFixture<FormvehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormvehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
