import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCardAssignZipComponent } from './manage-card-assign-zip.component';

describe('ManageCardAssignZipComponent', () => {
  let component: ManageCardAssignZipComponent;
  let fixture: ComponentFixture<ManageCardAssignZipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCardAssignZipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCardAssignZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
