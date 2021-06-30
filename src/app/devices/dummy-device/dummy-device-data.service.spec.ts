import {TestBed} from '@angular/core/testing';

import {DummyDeviceDataService} from './dummy-device-data.service';

describe('DummyDeviceDataService', () => {
  let service: DummyDeviceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyDeviceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
