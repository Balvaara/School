import { TestBed } from '@angular/core/testing';

import { ParrentService } from './parrent.service';

describe('ParrentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParrentService = TestBed.get(ParrentService);
    expect(service).toBeTruthy();
  });
});
