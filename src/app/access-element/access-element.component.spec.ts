import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessElementComponent } from './access-element.component';

describe('AccessElementComponent', () => {
  let component: AccessElementComponent;
  let fixture: ComponentFixture<AccessElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
