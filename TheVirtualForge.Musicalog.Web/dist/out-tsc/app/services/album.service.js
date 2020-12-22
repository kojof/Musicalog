import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let AlbumService = class AlbumService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    deleteAlbum(id) {
        return this.httpClient.delete(`${environment.albumWebAPIUrl}/Delete?id=` + id).subscribe((data) => {
            console.log(data);
        });
    }
    getAll() {
        return this.httpClient.get(`${environment.albumWebAPIUrl}/getall`);
    }
    getAlbumById(id) {
        return (this.httpClient.get(`${environment.albumWebAPIUrl}/getbyid?id=` + id));
    }
    addAlbum(album) {
        album.AlbumType = { Id: 2, Name: 'CD' };
        return this.httpClient.post(`${environment.albumWebAPIUrl}/add`, album);
    }
    editAlbum(album) {
        album.AlbumType = { Id: 2, Name: 'CD' };
        return this.httpClient.put(`${environment.albumWebAPIUrl}/edit`, album);
    }
};
AlbumService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AlbumService);
export { AlbumService };
//# sourceMappingURL=album.service.js.map