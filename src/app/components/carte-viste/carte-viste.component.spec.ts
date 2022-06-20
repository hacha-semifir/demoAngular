import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVisteComponent } from './carte-viste.component';

describe('CarteVisteComponent', () => {
  let component: CarteVisteComponent;
  let fixture: ComponentFixture<CarteVisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteVisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteVisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
