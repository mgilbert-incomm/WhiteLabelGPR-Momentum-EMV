import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipBoxComponent } from './tip-box.component';

describe('TipBoxComponent', () => {
  let component: TipBoxComponent;
  let fixture: ComponentFixture<TipBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
