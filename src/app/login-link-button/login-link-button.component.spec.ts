import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginLinkButtonComponent} from './login-link-button.component';

describe('LoginLinkButtonComponent', () => {
  let component: LoginLinkButtonComponent;
  let fixture: ComponentFixture<LoginLinkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginLinkButtonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
