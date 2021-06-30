import { TestBed } from '@angular/core/testing';

import { EditDummyService } from './edit-dummy.service';

describe('EditDummyService', () => {
  let service: EditDummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditDummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
