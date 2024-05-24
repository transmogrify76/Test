import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraintumorComponent } from './braintumor.component';

describe('BraintumorComponent', () => {
  let component: BraintumorComponent;
  let fixture: ComponentFixture<BraintumorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BraintumorComponent]
    });
    fixture = TestBed.createComponent(BraintumorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
