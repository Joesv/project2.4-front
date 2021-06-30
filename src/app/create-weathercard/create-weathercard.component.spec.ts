import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateWeathercardComponent} from './create-weathercard.component';

describe('CreateWeathercardComponent', () => {
  let component: CreateWeathercardComponent;
  let fixture: ComponentFixture<CreateWeathercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateWeathercardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWeathercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
