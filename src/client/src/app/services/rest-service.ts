import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {ResponseContentType} from "@angular/http";
import { environment } from '../../environments/environment';

@Injectable()
export class RestService {
    constructor(
        private http : HttpClient
    ) {}

    get(url: string) : Observable<Object[]> {
        let fullUrl = this.toFullUrl(url);
        return this.http.get(fullUrl);
    }

    getPdf(url: string) : any {
        let fullUrl = this.toFullUrl(url);
        return this.http.get(fullUrl, {responseType: 'arraybuffer'});
    }

    post(url: string, data: any): void {
        let requestHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post(this.toFullUrl(url), JSON.stringify(data), {headers: requestHeaders})
            .subscribe(data => console.log(data));
    }

    private toFullUrl(url: string) {
        return environment.hostname + url;
    }


}
