import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatButtonToggleModule } from '@angular/material';

import { CodenamesJoinComponent } from './codenames-join.component';

describe('CodenamesJoinComponent', () => {
    let component: CodenamesJoinComponent;
    let fixture: ComponentFixture<CodenamesJoinComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CodenamesJoinComponent],
            imports: [RouterTestingModule, MatButtonToggleModule]
        }).compileComponents();
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
