import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerEjercicioComponent } from './container-ejercicio.component';

describe('ContainerEjercicioComponent', () => {
  let component: ContainerEjercicioComponent;
  let fixture: ComponentFixture<ContainerEjercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerEjercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
