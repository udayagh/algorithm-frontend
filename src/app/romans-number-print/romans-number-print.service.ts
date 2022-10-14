import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {HttpService} from "../http.service";

@Injectable()
export class RomansNumberPrintService {

  constructor(private http: HttpClient) {
  }

  getRomansNumerals(roamNumber: number): Observable<any> {
    return this.http.get(HttpService.SERVICE_PATH + 'romans/getRomansNumerals/' + roamNumber)
      .pipe(map(response => <any>response));
  }
}
