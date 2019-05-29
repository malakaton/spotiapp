import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line: max-line-length
        Authorization: 'Bearer BQANdHt4S7VX7xlt9nigKKsLnyPxTw0pT4iwc_xqr_ApTfkz1NH8q4LVTVbTBPo_Oo4RSbDaAqeKbhSZxjSkwqUVFDKFcxQWZLIXvuKLNjUjxS5jlC7GhTjzlKRYOK_YkhFTfWfEYxvm2iQsAGRDVI-x5wV8yMC_2Q'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
              .pipe( map( (data: any) => {
                return data.albums.items;
              })
            );
  }

  getArtist(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe( map( (data: any) => {
                return data.artists.items;
              })
            );
  }
}
