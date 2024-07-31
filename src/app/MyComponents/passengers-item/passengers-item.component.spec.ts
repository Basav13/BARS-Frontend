import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersItemComponent } from './passengers-item.component';

describe('PassengersItemComponent', () => {
  let component: PassengersItemComponent;
  let fixture: ComponentFixture<PassengersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengersItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
