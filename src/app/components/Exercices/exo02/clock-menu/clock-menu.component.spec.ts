import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockMenuComponent } from './clock-menu.component';

describe('ClockMenuComponent', () => {
  let component: ClockMenuComponent;
  let fixture: ComponentFixture<ClockMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
