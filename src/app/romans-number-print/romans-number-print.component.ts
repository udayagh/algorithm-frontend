import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {take} from "rxjs";
import {RomansNumberPrintService} from "./romans-number-print.service";

@Component({
  selector: 'app-romans-number-print',
  templateUrl: './romans-number-print.component.html',
  styleUrls: ['./romans-number-print.component.css']
})
export class RomansNumberPrintComponent implements OnInit {

  title = 'Romans Number Print';

  contactForm = new FormGroup({
    name: new FormControl(),
    status: new FormControl()
  })

  constructor(private romansNumberPrintService: RomansNumberPrintService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.romansNumberPrintService.getRomansNumerals(this.contactForm.value.name).pipe(take(1)).subscribe(response => {
      console.log(response);
      this.snackBar.open('Romans Number Print Result    :    ' + response.response, 'success', {
        duration: 8000
      });
    });
  }
}
