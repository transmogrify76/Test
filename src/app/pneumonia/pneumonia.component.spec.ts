import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PneumoniaComponent } from './pneumonia.component';

describe('PneumoniaComponent', () => {
  let component: PneumoniaComponent;
  let fixture: ComponentFixture<PneumoniaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PneumoniaComponent]
    });
    fixture = TestBed.createComponent(PneumoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
