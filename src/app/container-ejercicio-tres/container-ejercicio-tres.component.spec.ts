import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerEjercicioTresComponent } from './container-ejercicio-tres.component';

describe('ContainerEjercicioTresComponent', () => {
  let component: ContainerEjercicioTresComponent;
  let fixture: ComponentFixture<ContainerEjercicioTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerEjercicioTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerEjercicioTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
