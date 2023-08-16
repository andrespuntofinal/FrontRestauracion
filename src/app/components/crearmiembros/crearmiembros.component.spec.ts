import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearmiembrosComponent } from './crearmiembros.component';

describe('CrearmiembrosComponent', () => {
  let component: CrearmiembrosComponent;
  let fixture: ComponentFixture<CrearmiembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearmiembrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearmiembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
