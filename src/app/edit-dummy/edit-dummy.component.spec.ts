import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDummyComponent } from './edit-dummy.component';

describe('EditDummyComponent', () => {
  let component: EditDummyComponent;
  let fixture: ComponentFixture<EditDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDummyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
