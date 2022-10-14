import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {HttpService} from "../http.service";

@Injectable()
export class FibnonacciSeriesService {

  constructor(private http: HttpClient) {
  }

  fibonacciSeries(roamNumber: number): Observable<any> {
    return this.http.get(HttpService.SERVICE_PATH + 'fibonacciSeries/getFibonacciSeries/' + roamNumber)
      .pipe(map(response => <any>response));
  }
}
