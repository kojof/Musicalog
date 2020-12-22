import { TestBed } from '@angular/core/testing';
import { AlbumService } from './album.service';
describe('AlbumServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AlbumService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=album.service.spec.js.map