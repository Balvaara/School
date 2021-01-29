import { TestBed } from '@angular/core/testing';

import { NottesService } from './nottes.service';

describe('NottesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NottesService = TestBed.get(NottesService);
    expect(service).toBeTruthy();
  });
});
