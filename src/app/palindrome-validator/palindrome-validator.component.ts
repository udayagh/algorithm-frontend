import {Component, OnInit} from '@angular/core';
import {PalindromeService} from "./palindrome.service";
import {take} from "rxjs";
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-palindrome-validator',
  templateUrl: './palindrome-validator.component.html',
  styleUrls: ['./palindrome-validator.component.css']
})
export class PalindromeValidatorComponent implements OnInit {

  title = 'Palindrome Validator';

  contactForm = new FormGroup({
    name: new FormControl(),
    status: new FormControl()
  })

  constructor(private palindromeService: PalindromeService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.palindromeService.getPalindrome(this.contactForm.value.name).pipe(take(1)).subscribe(response => {
      console.log(response);
      this.snackBar.open('Palindrome Validation Result    :    ' + response, 'success', {
        duration: 8000
      });
    });
  }
}
