

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Property, SearchProperty } from '../interfaces/property';
import { AppService } from './app.service';
import { RequestService } from './request.service';
import { prepareParametersSearch } from '../utils/utils';

@Injectable()
export class PropertiesService {

    constructor(
        private _app: AppService,
        private httpClient: HttpClient,
        private _request: RequestService
    ) { }

    get(): Observable<Property[]> {
        return new Observable<Property[]>(observer => {
            this._request.get(this._app.apiUrl() + '/properties').subscribe(response => {
                observer.next(response);
                observer.complete();
            }, error => {
                console.log('error get');    
                console.log(error);
            });
        });
    }

    getFromSearch(profile: SearchProperty) {
        let params = prepareParametersSearch(profile);
        return new Observable<any>(observer => {
            this._request.get(this._app.apiUrl() + '/properties/search' + '?'+params).subscribe(response => {
                observer.next(response);
                observer.complete();
            }, error => {
                console.log('error get');
                console.log(error);
            });
        });
    }

    post(property: Property): Observable<any> {
        return new Observable<any>(observer => {
            this._request.post(this._app.apiUrl() + '/properties', {'property': property}).subscribe(
                response => {
					observer.next(response);
					observer.complete();
				},
				error => {
                    console.log('post error');
                    console.log(error);
                }
            );
		});
    }

    update(property: Property) {
        return new Observable<any>(observer => {
			this.httpClient.put(this._app.apiUrl() +'/properties/' + property.db_id, {'property': property}).subscribe(
                response => {
					observer.next(response);
					observer.complete();
				},
				error => {
                    console.log('update error');
                    console.log(error);
                }
            );
		});
    }

    delete(db_id: string) {
        return new Observable<boolean>(observer => {
			this._request.delete(this._app.apiUrl() + '/properties/' + db_id).subscribe(
                () => observer.next(true),
				error => console.log(error)
			);
		});
    }
}
