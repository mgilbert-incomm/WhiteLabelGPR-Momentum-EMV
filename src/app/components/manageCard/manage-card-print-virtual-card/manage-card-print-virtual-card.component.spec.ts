import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCardPrintVirtualCardComponent } from './manage-card-print-virtual-card.component';

describe('ManageCardPrintVirtualCardComponent', () => {
  let component: ManageCardPrintVirtualCardComponent;
  let fixture: ComponentFixture<ManageCardPrintVirtualCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCardPrintVirtualCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCardPrintVirtualCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
