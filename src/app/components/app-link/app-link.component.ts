import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './app-link.component.html',
  styleUrls: ['./app-link.component.css']
})
export class AppLinkComponent implements OnInit {
  @Input() target: string = null;
  @Input() url: string = null;
  @Input() content: string = null;
  constructor() { }
  ngOnInit() {
    if (this.target) {
      switch (this.target) {
        case 'Same Page':
          this.target = '_self';
          break;
        case 'New Page':
          this.target = '_blank';
          break;
        default:
          this.target = null;
      }
    } else {
      if (this.url.match('^(https?|ftp|file)://')) {
        this.target = '_blank';
      }
    }
  }
}
