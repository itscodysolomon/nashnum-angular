import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighScoreDialogComponent } from './high-score-dialog.component';

describe('HighScoreDialogComponent', () => {
  let component: HighScoreDialogComponent;
  let fixture: ComponentFixture<HighScoreDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighScoreDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighScoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
