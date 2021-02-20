import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarReservaComponent } from './agregar-editar-reserva.component';

describe('AgregarEditarReservaComponent', () => {
  let component: AgregarEditarReservaComponent;
  let fixture: ComponentFixture<AgregarEditarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarReservaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
