import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameKeyComponent } from './game-key.component';

describe('GameKeyComponent', () => {
  let component: GameKeyComponent;
  let fixture: ComponentFixture<GameKeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameKeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
