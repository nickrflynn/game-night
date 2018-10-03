import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodenamesJoinComponent } from './codenames-join.component';

describe('CodenamesJoinComponent', () => {
  let component: CodenamesJoinComponent;
  let fixture: ComponentFixture<CodenamesJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodenamesJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodenamesJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
