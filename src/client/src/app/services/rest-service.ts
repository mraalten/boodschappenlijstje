import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class RestService {
    private host = 'http://localhost:8082';
    constructor(
        private http : HttpClient
    ) {}

    get(url: string) : Observable<Object[]> {
        return this.http.get(this.toFullUrl(url));
    }

    post(url: string, data: any): void {
        let requestHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post(this.toFullUrl(url), JSON.stringify(data), {headers: requestHeaders})
            .subscribe(data => console.log(data));
    }

    private toFullUrl(url: string) {
        return this.host + url;
    }


}
