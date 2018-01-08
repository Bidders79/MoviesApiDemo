import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { IFilmsModel } from '../models/films.model';

/* this is how to import libraries used by something else these could all be add to an extension file
*/
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class ApiService {

    // inject the http service module
    constructor(private http: Http) {
    }

    myHeaders = new Headers({'Content-Type': 'application/json'});
    options = new RequestOptions({ headers: this.myHeaders });

    //retrun a list of films from the api service
    //this will only be called once somebody subscribes to it
    //this returns a stream of data that can be subscribed to asychronously
    // tslint:disable-next-line:one-line
    getFilms(): Observable<IFilmsModel[]>{
        return this.http.get('https://swapi.co/api/films/?format=json', this.options)
        .map((response: Response) =>
        {
            return <IFilmsModel[]> response.json().results;
        }).catch(this.errorHandle);
    }

    private errorHandle(error: Response){
        return Observable.throw(error.statusText);
    }
}


