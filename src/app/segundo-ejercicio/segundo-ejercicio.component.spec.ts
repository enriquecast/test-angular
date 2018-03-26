import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoEjercicioComponent } from './segundo-ejercicio.component';

describe('SegundoEjercicioComponent', () => {
  let component: SegundoEjercicioComponent;
  let fixture: ComponentFixture<SegundoEjercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoEjercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
