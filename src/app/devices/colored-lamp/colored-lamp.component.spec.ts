import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredLampComponent } from './colored-lamp.component';

describe('ColoredLampComponent', () => {
  let component: ColoredLampComponent;
  let fixture: ComponentFixture<ColoredLampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoredLampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoredLampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
