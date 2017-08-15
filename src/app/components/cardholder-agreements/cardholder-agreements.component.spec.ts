import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardholderAgreementsComponent } from './cardholder-agreements.component';

describe('CardholderAgreementsComponent', () => {
  let component: CardholderAgreementsComponent;
  let fixture: ComponentFixture<CardholderAgreementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardholderAgreementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardholderAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
