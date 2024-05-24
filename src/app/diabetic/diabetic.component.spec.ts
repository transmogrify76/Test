import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabeticComponent } from './diabetic.component';

describe('DiabeticComponent', () => {
  let component: DiabeticComponent;
  let fixture: ComponentFixture<DiabeticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiabeticComponent]
    });
    fixture = TestBed.createComponent(DiabeticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
