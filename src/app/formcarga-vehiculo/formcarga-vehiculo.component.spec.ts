import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcargaVehiculoComponent } from './formcarga-vehiculo.component';

describe('FormcargaVehiculoComponent', () => {
  let component: FormcargaVehiculoComponent;
  let fixture: ComponentFixture<FormcargaVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcargaVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcargaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
