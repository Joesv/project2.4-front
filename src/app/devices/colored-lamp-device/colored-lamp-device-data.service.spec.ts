import { TestBed } from '@angular/core/testing';

import { ColoredLampDeviceDataService } from './colored-lamp-device-data.service';

describe('ColoredLampDeviceDataService', () => {
  let service: ColoredLampDeviceDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColoredLampDeviceDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
