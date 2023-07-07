import { Component } from '@angular/core';
import { MovieDataService } from './movie-data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

movies:any;

constructor(private data: MovieDataService){

}

ngOnInit(){
  this.data.getMivies().subscribe(res=>{console.log(res); this.movies = res});

  this.data.getWL().subscribe(res=>console.log(res))
}

getToken(){
  this.data.getTtoken().subscribe(res=>console.log(res))
}

getID(){
  this.data.getId().subscribe(res=>console.log(res))
}

ADD(){
  this.data.addToWL().subscribe(res=> console.log(res))
}

}
