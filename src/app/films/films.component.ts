import { Component, OnInit } from '@angular/core';
import { IFilmsModel } from '../models/films.model';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './films.component.html',
  styles: [`
    .film-dates{ float:right; margin-bottom: 50px; }
    .film-block { padding:20px; }
    .director-producers strong {padding-right:50px;}
  `]
})
export class FilmsComponent implements OnInit{
  
  
  filmsList: IFilmsModel[];
 
  //inject the api service handler
  constructor(private apiService: ApiService, private route:ActivatedRoute) { 
  } 

  //lifestyle hook
    ngOnInit(){
      //basically this is receiving films in and returning a list of films out
        // this.apiService.getFilms().subscribe(films => {
        //   this.filmsList = films;
        // });
      
      //the data is now recieved from the route handler resolver method, 
      //the property films is populated with data by a resolver service
      this.filmsList = this.route.snapshot.data['films'] as IFilmsModel[];
    }
}



