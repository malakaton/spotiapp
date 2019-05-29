import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor(private spotiService: SpotifyService) { }

  buscar(termino: string) {
    this.loading = true;
    this.spotiService.getArtist(termino)
      .subscribe(
        (data: any) => {
          this.artists = data;
          this.loading = false;
      });
  }

}
