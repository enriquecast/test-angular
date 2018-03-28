import { TestBed, inject } from '@angular/core/testing';

import { IngresarNombreService } from './ingresar-nombre.service';

describe('IngresarNombreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngresarNombreService]
    });
  });

  it('should be created', inject([IngresarNombreService], (service: IngresarNombreService) => {
    expect(service).toBeTruthy();
  }));
});
