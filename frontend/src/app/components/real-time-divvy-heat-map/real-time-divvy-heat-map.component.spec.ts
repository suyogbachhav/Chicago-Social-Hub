import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeDivvyHeatMapComponent } from './real-time-divvy-heat-map.component';

describe('RealTimeDivvyHeatMapComponent', () => {
  let component: RealTimeDivvyHeatMapComponent;
  let fixture: ComponentFixture<RealTimeDivvyHeatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeDivvyHeatMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeDivvyHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
