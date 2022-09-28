import { TestBed } from '@angular/core/testing';

import { tokenStorageService  } from './token-storage.service';

describe('LocalStorageServiceService', () => {
  let service: tokenStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(tokenStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
