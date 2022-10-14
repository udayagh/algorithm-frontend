import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {take} from "rxjs";
import {MinimumCoinCheckerService} from "./minimum-coin-checker.service";

@Component({
  selector: 'app-minimum-coin-checker',
  templateUrl: './minimum-coin-checker.component.html',
  styleUrls: ['./minimum-coin-checker.component.css']
})
export class MinimumCoinCheckerComponent implements OnInit {
  title = 'Minimum Number Validator';

  contactForm = new FormGroup({
    name: new FormControl(),
    status: new FormControl()
  })

  constructor(private minimumCoinCheckerService: MinimumCoinCheckerService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.minimumCoinCheckerService.getMinimumConins(this.contactForm.value.name).pipe(take(1)).subscribe(response => {
      console.log(response);
      this.snackBar.open('Minimum Coins Validation Result    :    ' + response, 'success', {
        duration: 8000
      });
    });
  }
}
