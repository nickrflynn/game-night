import { TestBed } from '@angular/core/testing';

import { CodenamesCardService } from './codenames-card.service';

describe('CodenamesCardService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CodenamesCardService = TestBed.get(CodenamesCardService);
        expect(service).toBeTruthy();
    });
});
