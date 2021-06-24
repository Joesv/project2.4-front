import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyDeviceComponent } from './dummy-device.component';

describe('DummyDeviceComponent', () => {
  let component: DummyDeviceComponent;
  let fixture: ComponentFixture<DummyDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
