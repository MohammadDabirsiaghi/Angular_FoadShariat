import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationWithComponent } from './view-encapsulation-with.component';

describe('ViewEncapsulationWithComponent', () => {
  let component: ViewEncapsulationWithComponent;
  let fixture: ComponentFixture<ViewEncapsulationWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
