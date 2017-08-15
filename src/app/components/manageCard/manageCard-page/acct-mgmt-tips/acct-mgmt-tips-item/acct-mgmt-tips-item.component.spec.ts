import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctMgmtTipsItemComponent } from './acct-mgmt-tips-item.component';

describe('AcctMgmtTipsItemComponent', () => {
  let component: AcctMgmtTipsItemComponent;
  let fixture: ComponentFixture<AcctMgmtTipsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcctMgmtTipsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcctMgmtTipsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
