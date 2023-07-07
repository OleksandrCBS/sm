import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  apiKey = "4cabdfa870e668300373ddffdc459bd6"
  token = "340c48730ab218a939340cf333cb8c2046d216aa"
  id = "2d661f2ec4992d3223c84275c80bed6718fefd2d"

  

  constructor(private http:HttpClient) { }

  getMivies():Observable<any>{
   return this.http.get<any>(`https://api.themoviedb.org/3/movie/now_playing?language=uk-ua&page=1&api_key=${this.apiKey}`)
  }

  getTtoken(){
   return this.http.get( `https://api.themoviedb.org/3/authentication/token/new?api_key=${this.apiKey}`)
  }

  getId(){
    return this.http.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=${this.apiKey}`,
    {
      "request_token":"340c48730ab218a939340cf333cb8c2046d216aa"
    })
  }
  
  getWL(){
    return this.http.get(`https://api.themoviedb.org/3/account/11571325/watchlist/movies?api_key=${this.apiKey}&session_id=${this.id}`)
  }

  addToWL(){
    return this.http.post(`https://api.themoviedb.org/3/account/11571325/watchlist?api_key=${this.apiKey}&session_id=${this.id}`,
    {
      "media_type":"movie",
      "media_id":385687,
      "watchlist":true
    })
  }
}
