import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AngularFirestore } from '@angular/fire/firestore';

import { CodenamesCardService } from './codenames-card.service';
import { of } from 'rxjs';

// See https://github.com/angular/angularfire2/issues/1706
const FirestoreStub = {
    collection: () => {
        return of({});
    }
};

describe('CodenamesCardService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [{ provide: AngularFirestore, useValue: FirestoreStub }]
        }));

    it('should be created', () => {
        const service: CodenamesCardService = TestBed.get(CodenamesCardService);
        expect(service).toBeTruthy();
    });

    it('1', () => {
        expect(true).toBeTruthy();
    });

    it('2', () => {
        expect(true).toBeTruthy();
    });

    it('3', () => {
        expect(true).toBeTruthy();
    });
});
