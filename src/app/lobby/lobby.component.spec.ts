import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

import { LobbyComponent } from './lobby.component';
import { CodenamesCardService } from '../codenames/codenames-card.service';

// See https://github.com/angular/angularfire2/issues/1706
const FirestoreStub = {
    collection: () => {
        return of({});
    }
};

describe('LobbyComponent', () => {
    let component: LobbyComponent;
    let fixture: ComponentFixture<LobbyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LobbyComponent],
            imports: [RouterTestingModule, HttpClientTestingModule],
            providers: [{ provide: AngularFirestore, useValue: FirestoreStub }]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LobbyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('1', () => {
    //     expect(true).toBeTruthy();
    // });

    // it('2', () => {
    //     expect(true).toBeTruthy();
    // });

    // it('3', () => {
    //     expect(true).toBeTruthy();
    // });
});
