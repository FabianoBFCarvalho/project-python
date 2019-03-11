
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';
import { Contact } from '../interfaces/contact';
import { PropertyProfile, SearchProperty } from '../interfaces/property';
import { prepareParametersSearch } from '../utils/utils';

@Injectable()
export class ContactService {

    constructor(
        private _app: AppService,
        private httpClient: HttpClient,
        private _request: RequestService
    ) { }
    
    getContacts(): Observable<Contact[]> {
        return new Observable<Contact[]>(observer => {
            this._request.get(this._app.apiUrl() + '/contacts').subscribe(response => {
                observer.next(response);
                observer.complete();
            }, error => {
                console.log('error get');
                console.log(error);
            });
        });
    }

    getContact(db_id: string): Observable<Contact> {
        return new Observable<Contact>(observer => {
            this._request.get(this._app.apiUrl() + '/contacts/' + db_id).subscribe(response => {
                observer.next(response);
                observer.complete();
            }, error => {
                console.log('error get');
                console.log(error);
            });
        });
    }

    getFromSearch(textSearch: string): Observable<any> {
        return new Observable<Contact[]>(observer => {
            this._request.get(this._app.apiUrl() + '/contacts' + '?'+'search_text=' + textSearch).subscribe(response => {
                observer.next(response);
                observer.complete();
            }, error => {
                console.log('error get');
                console.log(error);
            });
        });
    }

    getContactsearch(profile: SearchProperty): Observable<any> {
        let params = prepareParametersSearch(profile);
        return new Observable<any>(observer => {
            this._request.get(this._app.apiUrl() + '/contacts/search' + '?'+ params).subscribe(response => {
                observer.next(response);
                observer.complete();
            }, error => {
                console.log('error get');
                console.log(error);
            });
        });
    }

    post(contact: Contact): Observable<any> {
        return new Observable<any>(observer => {
            this._request.post(this._app.apiUrl() + '/contacts', {'contact': contact}).subscribe(
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

    savePhoto(photoFormData: FormData) {
        return new Observable<any>(observer => {
            this._request.postForm(this._app.apiUrl() + '/contacts/photo', photoFormData).subscribe(
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

    update(contact: Contact) {
        return new Observable<any>(observer => {
			this.httpClient.put(this._app.apiUrl() +'/contacts/' + contact.db_id, {'contact': contact}).subscribe(
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
			this._request.delete(this._app.apiUrl() + '/contacts/' + db_id).subscribe(
                () => observer.next(true),
				error => console.log(error)
			);
		});
    }
   
}
