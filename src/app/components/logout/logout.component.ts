import {Component, Input, OnInit} from '@angular/core';
import { CMSService } from 'app/services/CMS.service';
import { UserService } from 'app/services/user/User.service';
import {UserStateComponent} from 'app/BaseComponent';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})

export class LogoutComponent extends UserStateComponent implements OnInit {
  constructor(cmsService: CMSService, userService: UserService, private router: Router) {
    super(cmsService, userService);
  }

  ngOnInit() {
    this.userService.logout();
    this.router.navigate(['/home']);
  }

  userStateChanged() {
  }

  cmsUpdated() {

  }
}
