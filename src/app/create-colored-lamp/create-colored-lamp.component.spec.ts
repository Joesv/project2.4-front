import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateColoredLampComponent } from './create-colored-lamp.component';

describe('CreateColoredLampComponent', () => {
  let component: CreateColoredLampComponent;
  let fixture: ComponentFixture<CreateColoredLampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateColoredLampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateColoredLampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
