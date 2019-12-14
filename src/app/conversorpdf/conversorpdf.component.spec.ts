import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorpdfComponent } from './conversorpdf.component';

describe('ConversorpdfComponent', () => {
  let component: ConversorpdfComponent;
  let fixture: ComponentFixture<ConversorpdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversorpdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
