import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcHorarioComponent } from './calc-horario.component';

describe('CalcHorarioComponent', () => {
  let component: CalcHorarioComponent;
  let fixture: ComponentFixture<CalcHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
