import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLifeCycleComponent } from './child-life-cycle.component';

describe('ChildLifeCycleComponent', () => {
  let component: ChildLifeCycleComponent;
  let fixture: ComponentFixture<ChildLifeCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildLifeCycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
