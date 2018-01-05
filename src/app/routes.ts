import {Routes} from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmsListResolver } from './shared/films-list-resolver.service';

export const appRoutes: Routes = [

    /* when this route is requested, call the resolve handler passing in an object
       with a property of films of type FilmsListResolver              
       the FilmsListResolver is called and when this finishes
       assign the data to the property films
    */
    { path: 'films', component: FilmsComponent, resolve: {films: FilmsListResolver}},
    { path: '', redirectTo: '/films', pathMatch: 'full'},
]