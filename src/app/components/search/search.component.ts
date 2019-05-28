import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];

  constructor(private spotiService: SpotifyService) { }

  buscar(termino: string) {
    console.log(termino);
    this.spotiService.getArtist(termino)
      .subscribe(
        (data: any) => {
          this.artists = data;
      });
  }

}
