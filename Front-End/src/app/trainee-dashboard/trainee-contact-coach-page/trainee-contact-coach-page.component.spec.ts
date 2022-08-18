import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeContactCoachPageComponent } from './trainee-contact-coach-page.component';

describe('TraineeContactCoachPageComponent', () => {
  let component: TraineeContactCoachPageComponent;
  let fixture: ComponentFixture<TraineeContactCoachPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeContactCoachPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeContactCoachPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
