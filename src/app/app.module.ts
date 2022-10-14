import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PalindromeValidatorComponent} from './palindrome-validator/palindrome-validator.component';
import {RomansNumberPrintComponent} from './romans-number-print/romans-number-print.component';
import {MinimumCoinCheckerComponent} from './minimum-coin-checker/minimum-coin-checker.component';
import {FibonacciSeriesComponent} from './fibonacci-series/fibonacci-series.component';
import {MatCardModule} from "@angular/material/card";
import {PalindromeService} from "./palindrome-validator/palindrome.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {FibnonacciSeriesService} from "./fibonacci-series/fibnonacci-series.service";
import {MinimumCoinCheckerService} from "./minimum-coin-checker/minimum-coin-checker.service";
import {RomansNumberPrintService} from "./romans-number-print/romans-number-print.service";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PalindromeValidatorComponent,
    RomansNumberPrintComponent,
    MinimumCoinCheckerComponent,
    FibonacciSeriesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      {path: 'palindrome-validator', component: PalindromeValidatorComponent},
      {path: 'roams-number-print', component: RomansNumberPrintComponent},
      {path: 'minimum-coin-checker', component: MinimumCoinCheckerComponent},
      {path: 'fibonacci-series', component: FibonacciSeriesComponent},
      {path: '', redirectTo: '/palindrome-validator', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
  ],
  providers: [
    PalindromeService,
    FibnonacciSeriesService,
    MinimumCoinCheckerService,
    RomansNumberPrintService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
