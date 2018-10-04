import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MatGridListModule, MatCardModule } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';

import { CodenamesKeyComponent } from './codenames-key.component';
import { CodenamesBoardComponent } from '../codenames-board/codenames-board.component';

// See https://github.com/angular/angularfire2/issues/1706
const FirestoreStub = {};

describe('CodenamesKeyComponent', () => {
    let component: CodenamesKeyComponent;
    let fixture: ComponentFixture<CodenamesKeyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CodenamesKeyComponent, CodenamesBoardComponent],
            imports: [RouterTestingModule, HttpClientTestingModule, MatGridListModule, MatCardModule],
            providers: [{ provide: AngularFirestore, useValue: FirestoreStub }]
        }).compileComponents();
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
