import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildpersonComponent } from './childperson.component';

describe('ChildpersonComponent', () => {
  let component: ChildpersonComponent;
  let fixture: ComponentFixture<ChildpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
