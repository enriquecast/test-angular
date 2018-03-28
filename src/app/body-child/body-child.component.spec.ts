import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyChildComponent } from './body-child.component';

describe('BodyChildComponent', () => {
  let component: BodyChildComponent;
  let fixture: ComponentFixture<BodyChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
