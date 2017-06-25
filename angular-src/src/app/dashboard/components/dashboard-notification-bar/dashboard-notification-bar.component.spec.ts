import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNotificationBarComponent } from './dashboard-notification-bar.component';

describe('DashboardNotificationBarComponent', () => {
  let component: DashboardNotificationBarComponent;
  let fixture: ComponentFixture<DashboardNotificationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardNotificationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNotificationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
