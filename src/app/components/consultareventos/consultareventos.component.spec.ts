import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultareventosComponent } from './consultareventos.component';

describe('ConsultareventosComponent', () => {
  let component: ConsultareventosComponent;
  let fixture: ComponentFixture<ConsultareventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultareventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultareventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
