import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VereventosComponent } from './vereventos.component';

describe('VereventosComponent', () => {
  let component: VereventosComponent;
  let fixture: ComponentFixture<VereventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VereventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VereventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
