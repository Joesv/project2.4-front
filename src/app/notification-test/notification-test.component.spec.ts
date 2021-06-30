import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NotificationTESTComponent} from './notification-test.component';

describe('NotificationTESTComponent', () => {
  let component: NotificationTESTComponent;
  let fixture: ComponentFixture<NotificationTESTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificationTESTComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationTESTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
