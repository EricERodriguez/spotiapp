import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  artistas: any []= [];
  loadingSearch: boolean = true;

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string){
    console.log(termino);

    this.loadingSearch;
    this.spotify.getArtista(termino)
    .subscribe( (data: any) => {
      console.log(data.artists.items);
      this.artistas = data.artists.items;
      this.loadingSearch= false;
    })
  }

}
