import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any[] = [];
  loading = true;

  constructor(private router: ActivatedRoute, private spotiService: SpotifyService) {
    this.router.params.subscribe( params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtista(id: string) {
    this.spotiService.getArtist(id)
      .subscribe( artista => {
        this.artista = artista;
        console.log(artista);
        this.loading = false;
      });
  }

  getTopTracks(id: string) {
    this.spotiService.getTopTracks(id)
      .subscribe( tracks => {
        this.topTracks = tracks;
        console.log(tracks);
      });
  }
}
