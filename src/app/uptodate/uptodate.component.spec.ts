import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UptodateComponent } from './uptodate.component';

describe('UptodateComponent', () => {
  let component: UptodateComponent;
  let fixture: ComponentFixture<UptodateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UptodateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UptodateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
