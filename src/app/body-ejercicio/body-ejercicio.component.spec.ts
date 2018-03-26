import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyEjercicioComponent } from './body-ejercicio.component';

describe('BodyEjercicioComponent', () => {
  let component: BodyEjercicioComponent;
  let fixture: ComponentFixture<BodyEjercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyEjercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
