import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEjercicioComponent } from './navbar-ejercicio.component';

describe('NavbarEjercicioComponent', () => {
  let component: NavbarEjercicioComponent;
  let fixture: ComponentFixture<NavbarEjercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarEjercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
