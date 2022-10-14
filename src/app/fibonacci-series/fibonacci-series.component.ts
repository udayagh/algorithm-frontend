import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {take} from "rxjs";
import {FibnonacciSeriesService} from "./fibnonacci-series.service";

@Component({
  selector: 'app-fibonacci-series',
  templateUrl: './fibonacci-series.component.html',
  styleUrls: ['./fibonacci-series.component.css']
})
export class FibonacciSeriesComponent implements OnInit {

  title = 'Fibonacci Series';

  contactForm = new FormGroup({
    name: new FormControl(),
    status: new FormControl()
  })

  constructor(private fibnonacciSeriesService: FibnonacciSeriesService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.fibnonacciSeriesService.fibonacciSeries(this.contactForm.value.name).pipe(take(1)).subscribe(response => {
      console.log(response);
      this.snackBar.open('Fibonacci Series Result    :    ' + response, 'success', {
        duration: 8000
      });
    });
  }

}
