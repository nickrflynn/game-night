import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodenamesBoardComponent } from './codenames-board.component';

describe('CodenamesBoardComponent', () => {
    let component: CodenamesBoardComponent;
    let fixture: ComponentFixture<CodenamesBoardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CodenamesBoardComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CodenamesBoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
