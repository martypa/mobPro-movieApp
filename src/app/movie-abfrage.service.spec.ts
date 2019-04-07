import { TestBed } from '@angular/core/testing';

import { MovieAbfrageService } from './movie-abfrage.service';

describe('MovieAbfrageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieAbfrageService = TestBed.get(MovieAbfrageService);
    expect(service).toBeTruthy();
  });
});
