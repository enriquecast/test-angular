import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEjercicioComponent } from './header-ejercicio.component';

describe('HeaderEjercicioComponent', () => {
  let component: HeaderEjercicioComponent;
  let fixture: ComponentFixture<HeaderEjercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderEjercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
