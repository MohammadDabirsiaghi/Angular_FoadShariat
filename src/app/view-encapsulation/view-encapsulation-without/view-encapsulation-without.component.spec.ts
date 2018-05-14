import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationWithoutComponent } from './view-encapsulation-without.component';

describe('ViewEncapsulationWithoutComponent', () => {
  let component: ViewEncapsulationWithoutComponent;
  let fixture: ComponentFixture<ViewEncapsulationWithoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEncapsulationWithoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEncapsulationWithoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
