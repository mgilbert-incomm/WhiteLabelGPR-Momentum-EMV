import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQPageComponent } from './faq-page.component';

describe('FaqContainerComponent', () => {
  let component: FAQPageComponent;
  let fixture: ComponentFixture<FAQPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAQPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
