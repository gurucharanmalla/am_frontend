import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTicketComponent } from './ad-ticket.component';

describe('AdTicketComponent', () => {
  let component: AdTicketComponent;
  let fixture: ComponentFixture<AdTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
