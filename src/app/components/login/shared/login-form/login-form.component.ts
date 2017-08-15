import {Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmsContentTypes } from 'app/cms/cms-content-types';
import { CMSService } from 'app/services/CMS.service';
import { UserService } from 'app/services/user/User.service';
import { LoginFormCmsModel } from 'app/components/login/shared/login-form/login-form-cms-model';
import {UserStateComponent} from 'app/BaseComponent';
import {GreenCard} from 'app/services/greencard/GreenCard.service';
import {LoginRequest} from 'app/services/greencard/requests/login.request';
import {FormGroup, Validators, FormBuilder, ValidationErrors} from "@angular/forms";
import {NotificationService} from "../../../../services/notification/Notification.service";

@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent extends UserStateComponent implements OnInit {
  @Input() isLoginPageForm: boolean;

  public cardNumber: string;
  public expMonth: string;
  public expYear: string;
  public cvv: string;
  loginForm : FormGroup;
  public loginFormCmsModel: LoginFormCmsModel;
  public displayCvvHoverImage: boolean;

  constructor(cmsService: CMSService, userService: UserService, private gcService: GreenCard, private fb: FormBuilder, private notificationService: NotificationService, private router: Router) {
    super(cmsService, userService);
    this.createForm();

    this.loginForm.valueChanges.subscribe(data => {
      console.log('Form changes', data)

    })


  }

  ngOnInit() {
    this.displayCvvHoverImage = false;
   }

  sendError() {
    this.notificationService.error('Some value to send to the parent');
  }

  userStateChanged() { }

  private createForm() {

    this.loginForm = this.fb.group({
      cardNumber: ['', Validators.required],
      expMonth: ['', [Validators.required, Validators.minLength(2)]],
      expYear: ['', [Validators.required, Validators.minLength(2)]],
      cvv: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  performLogin() {
    const formValues = this.loginForm.value;
    const logCreds = new LoginRequest(formValues['cardNumber'], formValues['cvv'], formValues['expMonth'], formValues['expYear']);
    this.gcService.login(logCreds).subscribe((x) => {
        this.userService.changeLoginStatus(true);
        this.router.navigate(['/manageCard']);
      },
      (x) => {
        if (x.statsuCode === 401) {
          this.userService.changeLoginStatus(false);
        }
      });
  }

  public toggleHoverImage() {
    this.displayCvvHoverImage = !this.displayCvvHoverImage;
  }

  public cmsUpdated() {
      this.loginFormCmsModel = this.cmsService.getCmsChildComponent(LoginFormCmsModel, CmsContentTypes.PageHome, CmsContentTypes.LoginComponent);
  }
}
