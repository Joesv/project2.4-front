import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractDeviceComponent } from './abstract-device.component';

describe('AbstractDeviceComponent', () => {
  let component: AbstractDeviceComponent;
  let fixture: ComponentFixture<AbstractDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
