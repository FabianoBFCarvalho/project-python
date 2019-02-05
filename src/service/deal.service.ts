
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';
import { Deal, DealObjectPrepare } from '../interfaces/deal';
import { Contact } from '../interfaces/contact';

@Injectable()
export class DealService {

    constructor(
        private _app: AppService,
        private httpClient: HttpClient,
        private _request: RequestService
    ) { }
    
    get(): Observable<Deal[]> {
        return new Observable<Deal[]>(observer => {
            this._request.get(this._app.apiUrl() + '/deals').subscribe(response => {
                observer.next(response);
                observer.complete();
            }, error => {
                console.log('error get');    
                console.log(error);
            });
        });
    }

    post(dealPrepare: DealObjectPrepare): Observable<DealObjectPrepare> {        
        return new Observable<DealObjectPrepare>(observer => {
            this._request.post(this._app.apiUrl() + '/deals', {'deal': this.prepareDeal(dealPrepare)}).subscribe(
                response => {
					observer.next(response.db_id);
					observer.complete();
				},
				error => {
                    console.log('post error');
                    console.log(error);
                }
            );
		});
    }

    update(dealPrepare: DealObjectPrepare) {
        return new Observable<any>(observer => {
			this.httpClient.put(this._app.apiUrl() +'/deal/' + dealPrepare.deal.db_id, {
                'deal': this.prepareDeal(dealPrepare)}).subscribe(
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

    prepareDeal(dealPrepare: DealObjectPrepare) {
        dealPrepare.deal['contact_id'] = dealPrepare.contact.db_id;
        dealPrepare.deal['property_id'] = dealPrepare.property.db_id;
        return dealPrepare.deal;
    }

    delete(db_id: string) {
        return new Observable<boolean>(observer => {
			this._request.delete(this._app.apiUrl() + '/deal/' + db_id).subscribe(
                () => observer.next(true),
				error => console.log(error)
			);
		});
    }
   
}
