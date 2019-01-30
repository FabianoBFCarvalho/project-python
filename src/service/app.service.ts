import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
    apiUrl(): string {
        return 'http://localhost:8080';
    }
}