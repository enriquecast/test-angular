import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEjercicioComponent } from './footer-ejercicio.component';

describe('FooterEjercicioComponent', () => {
  let component: FooterEjercicioComponent;
  let fixture: ComponentFixture<FooterEjercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterEjercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
