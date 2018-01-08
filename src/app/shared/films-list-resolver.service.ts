import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';
import { IFilmsModel } from '../models/films.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FilmsListResolver implements Resolve<IFilmsModel[]>{

    //inject the api service
    constructor(private apiService: ApiService){}

    /*the resolve subscribes to the service for us
        resolve will be called by the page route -
        this enables the data to be loaded before the page, avoiding partial loading
    */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IFilmsModel[]> {
            return this.apiService.getFilms();
    }
}
