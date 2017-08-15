import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctMgmtTipsComponent } from './acct-mgmt-tips.component';

describe('AcctMgmtTipsComponent', () => {
  let component: AcctMgmtTipsComponent;
  let fixture: ComponentFixture<AcctMgmtTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcctMgmtTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcctMgmtTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
