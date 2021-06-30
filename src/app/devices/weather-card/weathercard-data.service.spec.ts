import {TestBed} from '@angular/core/testing';

import {WeathercardDataService} from './weathercard-data.service';

describe('WeathercardDataService', () => {
  let service: WeathercardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeathercardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
