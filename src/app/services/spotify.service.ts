import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
// tslint:disable-next-line: max-line-length
      Authorization: 'Bearer BQAWGYe29eTBR920kzlpdTAKrNgR5l254H2nImuD_WICSNmV4QSdizDgqLIsS-lgMuMlXMIqupQ-TdXrBHbcL8VyrMBNvb2QqDQsSUPUVwS7PT8PXnDeHsiwZeCgl8Y49_8jtucGL_3WKrpOhulEVBJNT9WEDAvlGQ'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
            .pipe(
                map( (data: any) => {
                  return data.albums.items;
                })
            );
  }

  getArtist(termino: string) {
    const headers = new HttpHeaders({
// tslint:disable-next-line: max-line-length
      Authorization: 'Bearer BQAWGYe29eTBR920kzlpdTAKrNgR5l254H2nImuD_WICSNmV4QSdizDgqLIsS-lgMuMlXMIqupQ-TdXrBHbcL8VyrMBNvb2QqDQsSUPUVwS7PT8PXnDeHsiwZeCgl8Y49_8jtucGL_3WKrpOhulEVBJNT9WEDAvlGQ'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
            .pipe(
                map( (data: any) => {
                  return data.artists.items;
                })
            );
  }
}
