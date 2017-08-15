import { Component, Input, OnInit } from '@angular/core';
import { ContactCmsModel } from 'app/components/faq/faq-page/contact/contact-cms-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contactCmsModel: ContactCmsModel;

  constructor() { }

  ngOnInit() { }
}
