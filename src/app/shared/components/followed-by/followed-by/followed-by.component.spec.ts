import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedByComponent } from './followed-by.component';

describe('FollowedByComponent', () => {
  let component: FollowedByComponent;
  let fixture: ComponentFixture<FollowedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FollowedByComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
