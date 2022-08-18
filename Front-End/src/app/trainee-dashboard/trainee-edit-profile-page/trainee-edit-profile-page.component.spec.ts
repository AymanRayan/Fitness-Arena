import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeEditProfilePageComponent } from './trainee-edit-profile-page.component';

describe('TraineeEditProfilePageComponent', () => {
  let component: TraineeEditProfilePageComponent;
  let fixture: ComponentFixture<TraineeEditProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeEditProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeEditProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
