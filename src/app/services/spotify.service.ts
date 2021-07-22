import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";


import { HttpClient, HttpHeaders } from '@angular/common/http';

// HttpHeaders permite el token de spotify


const token: string = `Bearer BQBdYg8KBor4xoAWLsSmpUwy6osLuRLzDJjGmrm6cHhvOUosXJaeel5ytu9NGmXsm57pK58-0STnNrO7L9s`;


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) 
  { console.log('Spotify conectado')}

  getNewReleases() {

    const headers = new HttpHeaders( {
      'Authorization': token
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe( map ((data:any) => {
        return data['albums'].items;
      }));
    // .subscribe( data => {
    //   console.log(data)
    // })

  }

  getArtista( termino:string) {

    const headers = new HttpHeaders( {
      'Authorization': token
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
  }
}
