import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerEjercicioCuatroComponent } from './container-ejercicio-cuatro.component';

describe('ContainerEjercicioCuatroComponent', () => {
  let component: ContainerEjercicioCuatroComponent;
  let fixture: ComponentFixture<ContainerEjercicioCuatroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerEjercicioCuatroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerEjercicioCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
