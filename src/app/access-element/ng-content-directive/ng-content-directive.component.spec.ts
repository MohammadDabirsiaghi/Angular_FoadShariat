import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentDirectiveComponent } from './ng-content-directive.component';

describe('NgContentDirectiveComponent', () => {
  let component: NgContentDirectiveComponent;
  let fixture: ComponentFixture<NgContentDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
