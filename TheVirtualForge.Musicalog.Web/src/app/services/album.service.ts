import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from} from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Album } from '../model/album';



@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public deleteAlbum(id: any) {
    return this.httpClient.delete(`${environment.albumWebAPIUrl}/Delete?id=` + id).subscribe((data) => {
      console.log(data);
  });
 }

  public getAll(): Observable<Album[]> {
      return this.httpClient.get<Album[]>(`${environment.albumWebAPIUrl}/getall`);
  }

  public getAlbumById(id: number): Observable<Album> {
      return (this.httpClient.get<Album>(`${environment.albumWebAPIUrl}/getbyid?id=` + id));
  }

  public addAlbum(album: Album): Observable<any> {

    album.AlbumType = {Id: 2, Name: 'CD'};
    return this.httpClient.post<string>(`${environment.albumWebAPIUrl}/add`, album);
  }

    public editAlbum(album: Album): Observable<any>{
        album.AlbumType = { Id: 2, Name: 'CD' };
    return this.httpClient.put<Album>(`${environment.albumWebAPIUrl}/edit`, album);
  }
}
