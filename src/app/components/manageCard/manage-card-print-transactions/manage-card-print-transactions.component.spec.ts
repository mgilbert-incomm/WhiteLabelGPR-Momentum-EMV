import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCardPrintTransactionsComponentComponent } from './manage-card-print-transactions-component.component';

describe('ManageCardPrintTransactionsComponentComponent', () => {
  let component: ManageCardPrintTransactionsComponentComponent;
  let fixture: ComponentFixture<ManageCardPrintTransactionsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCardPrintTransactionsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCardPrintTransactionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
