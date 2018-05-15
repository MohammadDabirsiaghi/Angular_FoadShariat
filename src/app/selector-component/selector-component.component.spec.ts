import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorComponentComponent } from './selector-component.component';

describe('SelectorComponentComponent', () => {
  let component: SelectorComponentComponent;
  let fixture: ComponentFixture<SelectorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
