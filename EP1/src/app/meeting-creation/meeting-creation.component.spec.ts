import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingCreationComponent } from './meeting-creation.component';

describe('MeetingCreationComponent', () => {
  let component: MeetingCreationComponent;
  let fixture: ComponentFixture<MeetingCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingCreationComponent]
    });
    fixture = TestBed.createComponent(MeetingCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
