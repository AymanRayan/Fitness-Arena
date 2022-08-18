import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineInbodyPageComponent } from './traine-inbody-page.component';

describe('TraineInbodyPageComponent', () => {
  let component: TraineInbodyPageComponent;
  let fixture: ComponentFixture<TraineInbodyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineInbodyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineInbodyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
