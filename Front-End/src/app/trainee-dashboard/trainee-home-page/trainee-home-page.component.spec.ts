import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeHomePageComponent } from './trainee-home-page.component';

describe('TraineeHomePageComponent', () => {
  let component: TraineeHomePageComponent;
  let fixture: ComponentFixture<TraineeHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
