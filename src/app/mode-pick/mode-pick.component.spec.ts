import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModePickComponent } from './mode-pick.component';

describe('ModePickComponent', () => {
  let component: ModePickComponent;
  let fixture: ComponentFixture<ModePickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModePickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModePickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
