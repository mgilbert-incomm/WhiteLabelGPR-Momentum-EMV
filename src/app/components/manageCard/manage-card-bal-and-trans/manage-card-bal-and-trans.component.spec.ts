import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCardBalAndTransComponent } from './manage-card-bal-and-trans.component';

describe('ManageCardBalAndTransComponent', () => {
  let component: ManageCardBalAndTransComponent;
  let fixture: ComponentFixture<ManageCardBalAndTransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCardBalAndTransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCardBalAndTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
