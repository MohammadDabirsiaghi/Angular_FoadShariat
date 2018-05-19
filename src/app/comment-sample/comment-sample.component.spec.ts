import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSampleComponent } from './comment-sample.component';

describe('CommentSampleComponent', () => {
  let component: CommentSampleComponent;
  let fixture: ComponentFixture<CommentSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
