import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  
  nuevasCanciones:any [] = [];

  loading: boolean;
  
  // http get paises
  paises: any [] =[]

  constructor( private http: HttpClient, private spotify: SpotifyService ) { 

    this.loading = true;

    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( (resp: any) => {
        this.paises = resp;
        console.log(resp);
      });

      this.spotify.getNewReleases()
      .subscribe( (data: any) => {

        console.log(data);
        this.nuevasCanciones =  data;
        this.loading = false;
      });

     
   }

  ngOnInit(): void {
  }

}
