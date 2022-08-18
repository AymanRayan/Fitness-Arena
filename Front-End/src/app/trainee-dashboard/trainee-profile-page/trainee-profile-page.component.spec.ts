import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeProfilePageComponent } from './trainee-profile-page.component';

describe('TraineeProfilePageComponent', () => {
  let component: TraineeProfilePageComponent;
  let fixture: ComponentFixture<TraineeProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
