import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveninscComponent } from './eveninsc.component';

describe('EveninscComponent', () => {
  let component: EveninscComponent;
  let fixture: ComponentFixture<EveninscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveninscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveninscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
