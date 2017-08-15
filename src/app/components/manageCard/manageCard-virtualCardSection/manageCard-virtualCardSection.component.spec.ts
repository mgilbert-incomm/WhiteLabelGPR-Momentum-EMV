import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCardVirtualCardSectionComponent } from './manageCard-virtualCardSection.component';

describe('FaqContainerComponent', () => {
  let component: ManageCardVirtualCardSectionComponent;
  let fixture: ComponentFixture<ManageCardVirtualCardSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCardVirtualCardSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCardVirtualCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
