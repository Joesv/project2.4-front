import {TestBed} from '@angular/core/testing';

import {LampDeviceDataService} from './lamp-device-data.service';

describe('LampDeviceDataService', () => {
  let service: LampDeviceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LampDeviceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
