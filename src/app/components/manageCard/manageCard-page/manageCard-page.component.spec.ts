import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCardPageComponent } from './manageCard-page.component';

describe('FaqContainerComponent', () => {
  let component: ManageCardPageComponent;
  let fixture: ComponentFixture<ManageCardPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCardPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
