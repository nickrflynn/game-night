import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MatGridListModule, MatCardModule, MatDialogModule } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';

import { CodenamesBoardComponent } from './codenames-board.component';
import { CodenamesCardService } from '../codenames-card.service';

// See https://github.com/angular/angularfire2/issues/1706
const FirestoreStub = {};

describe('CodenamesBoardComponent', () => {
    let component: CodenamesBoardComponent;
    let fixture: ComponentFixture<CodenamesBoardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CodenamesBoardComponent],
            imports: [RouterTestingModule, HttpClientTestingModule, MatGridListModule, MatCardModule, MatDialogModule],
            providers: [{ provide: AngularFirestore, useValue: FirestoreStub }]
        }).compileComponents();
    }));

    beforeEach(inject([CodenamesCardService], (cardService: CodenamesCardService) => {
        spyOn(cardService, 'getGameObservable').and.returnValue(of({}));
        spyOn(cardService, 'updateGame').and.returnValue(of({}));
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
