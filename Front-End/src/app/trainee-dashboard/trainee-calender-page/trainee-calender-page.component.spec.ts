import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeCalenderPageComponent } from './trainee-calender-page.component';

describe('TraineeCalenderPageComponent', () => {
  let component: TraineeCalenderPageComponent;
  let fixture: ComponentFixture<TraineeCalenderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeCalenderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeCalenderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
