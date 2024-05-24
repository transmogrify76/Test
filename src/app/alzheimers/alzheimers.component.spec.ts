import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlzheimersComponent } from './alzheimers.component';

describe('AlzheimersComponent', () => {
  let component: AlzheimersComponent;
  let fixture: ComponentFixture<AlzheimersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlzheimersComponent]
    });
    fixture = TestBed.createComponent(AlzheimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
