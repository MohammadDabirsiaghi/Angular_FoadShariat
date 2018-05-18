import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterWithObjectComponent } from './event-emitter-with-object.component';

describe('EventEmitterWithObjectComponent', () => {
  let component: EventEmitterWithObjectComponent;
  let fixture: ComponentFixture<EventEmitterWithObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEmitterWithObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitterWithObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
