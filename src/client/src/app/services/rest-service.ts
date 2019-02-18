import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Product} from "../product";

@Injectable()
export class RestService {
    private host = 'http://localhost:8082';
    constructor(
        private http : HttpClient
    ) {}

    get(url: string) : Observable<Product[]> {
        return this.http.get(this.host + url);
    }
}
