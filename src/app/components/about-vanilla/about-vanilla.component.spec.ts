import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVanillaComponent } from './about-vanilla.component';
import {browser, element, by} from "protractor";

describe('AboutVanillaComponent', () => {
  let component: AboutVanillaComponent;
  let fixture: ComponentFixture<AboutVanillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutVanillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


});describe('momentum Homepage', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:4200');

    //element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    //element(by.css('[value="add"]')).click();
/*
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    */
    //expect(completedAmount.count()).toEqual(2);
  });
});


