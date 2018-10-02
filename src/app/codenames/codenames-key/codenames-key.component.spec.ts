import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodenamesKeyComponent } from './codenames-key.component';

describe('CodenamesKeyComponent', () => {
  let component: CodenamesKeyComponent;
  let fixture: ComponentFixture<CodenamesKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodenamesKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodenamesKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
