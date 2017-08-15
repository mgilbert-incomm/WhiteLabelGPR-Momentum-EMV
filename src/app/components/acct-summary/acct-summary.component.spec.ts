import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctSummaryComponent } from './acct-summary.component';

describe('AcctSummaryComponent', () => {
  let component: AcctSummaryComponent;
  let fixture: ComponentFixture<AcctSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcctSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcctSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
