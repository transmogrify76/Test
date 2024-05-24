import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiverComponent } from './liver.component';

describe('LiverComponent', () => {
  let component: LiverComponent;
  let fixture: ComponentFixture<LiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiverComponent]
    });
    fixture = TestBed.createComponent(LiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
