import { Injectable }						from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService {

    constructor(
        private httpClient: HttpClient,
    ) { }

    private options() {
        return <any>{
            withCredentials: false,
            observe: 'response',
            'Content-Type':  'application/json'
        }
    }

    private optionsFormData() {
        return <any>{
            withCredentials: false,
            observe: 'response',
			'Content-Type': 'multipart/form-data'
        }
    }

    get(url: string): Observable<any> {
        return new Observable<any>(observer => {
            this.httpClient.get(url, this.options()).subscribe((response: any) => {
                observer.next(response.body);
                observer.complete();
            }, error => {
                console.log('error get');    
                console.log(error);
            });
        });
    }

    post(url: string, params): Observable<any> {       
        return new Observable<any>(observer => {
			this.httpClient.post(url, JSON.stringify(params), this.options()).subscribe(
                (response: any) => {
					observer.next(response.body);
					observer.complete();
				},
				error => {
                    console.log('post error');
                    console.log(error);
                }
            );
		});
    }

    postForm(url: string, params: FormData) {
        return new Observable<any>(observer => {
			this.httpClient.post(url, params, this.optionsFormData()).subscribe(
                (response: any) => {
					observer.next(response.body);
					observer.complete();
				},
				error => {
                    console.log('post error');
                    console.log(error);
                }
            );
		});
    }

    delete(url: string) {
        return new Observable<boolean>(observer => {
			this.httpClient.delete(url).subscribe(
                () => observer.next(true),
				error => console.log(error)
			);
		});
    }


}