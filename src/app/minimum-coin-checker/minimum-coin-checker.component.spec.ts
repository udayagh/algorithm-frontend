import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimumCoinCheckerComponent } from './minimum-coin-checker.component';

describe('MinimumCoinCheckerComponent', () => {
  let component: MinimumCoinCheckerComponent;
  let fixture: ComponentFixture<MinimumCoinCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimumCoinCheckerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimumCoinCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
