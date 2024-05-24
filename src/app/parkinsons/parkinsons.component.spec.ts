import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkinsonsComponent } from './parkinsons.component';

describe('ParkinsonsComponent', () => {
  let component: ParkinsonsComponent;
  let fixture: ComponentFixture<ParkinsonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkinsonsComponent]
    });
    fixture = TestBed.createComponent(ParkinsonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
