import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeValidatorComponent } from './palindrome-validator.component';

describe('PalindromeValidatorComponent', () => {
  let component: PalindromeValidatorComponent;
  let fixture: ComponentFixture<PalindromeValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalindromeValidatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalindromeValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
