import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePinPageComponent } from './manage-pin-page.component';

describe('ManagePinPageComponent', () => {
  let component: ManagePinPageComponent;
  let fixture: ComponentFixture<ManagePinPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePinPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
