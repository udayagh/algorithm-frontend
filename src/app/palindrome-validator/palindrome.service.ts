import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {HttpService} from "../http.service";

@Injectable()
export class PalindromeService {

  constructor(private http: HttpClient) {
  }

  getPalindrome(palindrome: string): Observable<any> {
    return this.http.get(HttpService.SERVICE_PATH + 'palindromes/getPalindromeValidateStatus/' + palindrome)
      .pipe(map(response => <any>response));
  }

  getRomansNumerals(roamNumber: number): Observable<any> {
    return this.http.get(HttpService.SERVICE_PATH + 'romans/getRomansNumerals/' + roamNumber)
      .pipe(map(response => <any>response));
  }

  fibonacciSeries(roamNumber: number): Observable<any> {
    return this.http.get(HttpService.SERVICE_PATH + 'fibonacciSeries/getFibonacciSeries/' + roamNumber)
      .pipe(map(response => <any>response));
  }

  getMinimumConins(roamNumber: number): Observable<any> {
    return this.http.get(HttpService.SERVICE_PATH + 'minimumCoins/getMinimumConins/' + roamNumber)
      .pipe(map(response => <any>response));
  }
}
