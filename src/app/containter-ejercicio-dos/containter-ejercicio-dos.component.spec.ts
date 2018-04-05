import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainterEjercicioDosComponent } from './containter-ejercicio-dos.component';

describe('ContainterEjercicioDosComponent', () => {
  let component: ContainterEjercicioDosComponent;
  let fixture: ComponentFixture<ContainterEjercicioDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainterEjercicioDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainterEjercicioDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
