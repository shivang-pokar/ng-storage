import { TestBed } from '@angular/core/testing';

import { NgStorage } from './storage.service';

describe('NgStorage', () => {
  let service: NgStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
