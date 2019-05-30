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
        Authorization: 'Bearer BQAKKwT4gqOAbbxqZzoQEPNCprb64KeLqCjqyVSkbyzfjLQqvzRKpcZfzkGuXPI98M5MTz-ev2Nf_sFAs8QK38SxBYqhXx1PrH_wVOc5TEx2UkCcpIFZYx-Uzj5v5sSUiaHkD8CXoCumonkum90djGTpIfTEF0HxFA'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, { headers });
  }

  getArtist(id: string) {
    return this.getQuery( `artists/${id}`);
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
              .pipe( map( (data: any) => {
                return data.albums.items;
              })
            );
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe( map( (data: any) => {
                return data.artists.items;
              })
            );
  }

  getTopTracks(id: string) {
    return this.getQuery( `artists/${id}/top-tracks?country=us`)
              .pipe( map( (data: any) => {
                return data.tracks;
              })
            );
  }
}
