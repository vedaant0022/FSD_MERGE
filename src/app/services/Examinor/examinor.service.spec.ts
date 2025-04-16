import { TestBed } from '@angular/core/testing';

import { ExaminorService } from './examinor.service';

describe('ExaminorService', () => {
  let service: ExaminorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaminorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
