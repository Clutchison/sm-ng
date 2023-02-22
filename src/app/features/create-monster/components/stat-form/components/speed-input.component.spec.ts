import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedInputComponent } from './speed-input.component';

describe('SpeedInputComponent', () => {
  let component: SpeedInputComponent;
  let fixture: ComponentFixture<SpeedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SpeedInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
