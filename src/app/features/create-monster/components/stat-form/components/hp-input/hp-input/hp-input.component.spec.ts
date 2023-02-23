import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpInputComponent } from './hp-input.component';

describe('HpInputComponent', () => {
  let component: HpInputComponent;
  let fixture: ComponentFixture<HpInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HpInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
