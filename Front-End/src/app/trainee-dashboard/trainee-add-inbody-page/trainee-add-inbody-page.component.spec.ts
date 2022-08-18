import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeAddInbodyPageComponent } from './trainee-add-inbody-page.component';

describe('TraineeAddInbodyPageComponent', () => {
  let component: TraineeAddInbodyPageComponent;
  let fixture: ComponentFixture<TraineeAddInbodyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeAddInbodyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeAddInbodyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
