import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeProgramPageComponent } from './trainee-program-page.component';

describe('TraineeProgramPageComponent', () => {
  let component: TraineeProgramPageComponent;
  let fixture: ComponentFixture<TraineeProgramPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeProgramPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeProgramPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
