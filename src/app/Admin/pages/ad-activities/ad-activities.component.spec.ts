import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdActivitiesComponent } from './ad-activities.component';

describe('AdActivitiesComponent', () => {
  let component: AdActivitiesComponent;
  let fixture: ComponentFixture<AdActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
