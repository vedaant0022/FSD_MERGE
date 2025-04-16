import { TestBed } from '@angular/core/testing';

import { PracticalexamService } from './practicalexam.service';

describe('PracticalexamService', () => {
  let service: PracticalexamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticalexamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
