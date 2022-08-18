import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeSideBarComponent } from './trainee-side-bar.component';

describe('TraineeSideBarComponent', () => {
  let component: TraineeSideBarComponent;
  let fixture: ComponentFixture<TraineeSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
