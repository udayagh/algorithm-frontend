import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomansNumberPrintComponent } from './romans-number-print.component';

describe('RomansNumberPrintComponent', () => {
  let component: RomansNumberPrintComponent;
  let fixture: ComponentFixture<RomansNumberPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomansNumberPrintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomansNumberPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
