import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ColoredLampDeviceComponent} from './colored-lamp-device.component';

describe('ColoredLampDeviceComponent', () => {
  let component: ColoredLampDeviceComponent;
  let fixture: ComponentFixture<ColoredLampDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColoredLampDeviceComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoredLampDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
