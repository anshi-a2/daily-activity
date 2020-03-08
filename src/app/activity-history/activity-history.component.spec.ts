import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcivityHistoryComponent } from './activity-history.component';

describe('AcivityHistoryComponent', () => {
  let component: AcivityHistoryComponent;
  let fixture: ComponentFixture<AcivityHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcivityHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcivityHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
