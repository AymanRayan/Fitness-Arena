import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineExploreCoachesPageComponent } from './traine-explore-coaches-page.component';

describe('TraineExploreCoachesPageComponent', () => {
  let component: TraineExploreCoachesPageComponent;
  let fixture: ComponentFixture<TraineExploreCoachesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineExploreCoachesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineExploreCoachesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
