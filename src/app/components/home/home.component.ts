import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  loading: boolean;
  errorMessage: string;
  showError: boolean;

  constructor(private spotiService: SpotifyService) {
    this.loading = true;
    this.showError = false;
    this.spotiService.getNewReleases()
      .subscribe( (data: any) => {
        this.nuevasCanciones = data;
        this.loading = false;
      }, (errorMsg) => {
        this.loading = false;
        this.showError = true;
        this.errorMessage = errorMsg.error.error.message;
      });
  }
}
