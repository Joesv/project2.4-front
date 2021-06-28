import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDummyComponent } from './create-dummy.component';

describe('CreateDummyComponent', () => {
  let component: CreateDummyComponent;
  let fixture: ComponentFixture<CreateDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDummyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
