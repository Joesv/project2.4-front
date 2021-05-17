import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightDeviceComponentComponent } from './light-device-component.component';

describe('LightDeviceComponentComponent', () => {
  let component: LightDeviceComponentComponent;
  let fixture: ComponentFixture<LightDeviceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightDeviceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightDeviceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
