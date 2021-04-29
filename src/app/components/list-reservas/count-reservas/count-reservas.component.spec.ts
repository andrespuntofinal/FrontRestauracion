import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountReservasComponent } from './count-reservas.component';

describe('CountReservasComponent', () => {
  let component: CountReservasComponent;
  let fixture: ComponentFixture<CountReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountReservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
