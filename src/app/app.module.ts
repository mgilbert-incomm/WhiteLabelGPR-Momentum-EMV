import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AcctMgmtTipsComponent } from './components/manageCard/manageCard-page/acct-mgmt-tips/acct-mgmt-tips.component';
import { AcctMgmtTipsItemComponent } from './components/manageCard/manageCard-page/acct-mgmt-tips/acct-mgmt-tips-item/acct-mgmt-tips-item.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CMSService } from './services/CMS.service';
import { GreenCard } from 'app/services/greencard/GreenCard.service';
import { UserService } from 'app/services/user/User.service';
import { DocumentRef } from './services/DocumentRef';
import { WindowRef } from './services/WindowRef';
import { LoginFormComponent } from './components/login/shared/login-form/login-form.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { FAQPageComponent } from './components/faq/faq-page/faq-page.component';
import { ManageCardPageComponent } from './components/manageCard/manageCard-page/manageCard-page.component';
import { ManageCardVirtualCardSectionComponent } from './components/manageCard/manageCard-virtualCardSection/manageCard-virtualCardSection.component';

import {NewsletterComponent} from './components/newsletter/newsletter.component';
import { FaqItemComponent } from './components/faq/shared/faq-item/faq-item.component';
import { ContactComponent } from './components/faq/faq-page/contact/contact.component';
import { LogoutComponent } from 'app/components/logout/logout.component';

import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import {AboutPageComponent} from './components/about/about-page/about-page.component';
import {AboutTabComponent} from './components/about/about-tab/about-tab.component';

import { CardholderAgreementsComponent } from './components/cardholder-agreements/cardholder-agreements.component';
import { TipBoxComponent } from './components/home/home-page/tip-box/tip-box.component';
import {AboutVanillaComponent} from './components/about-vanilla/about-vanilla.component';
import { ManagePinComponent } from './components/manage-pin/manage-pin/manage-pin.component';
import { ManagePinPageComponent } from './components/manage-pin/manage-pin-page.component';
import { ManageCardBalAndTransComponent } from './components/manageCard/manage-card-bal-and-trans/manage-card-bal-and-trans.component';
import { ManageCardAssignZipComponent } from './components/manageCard/manage-card-assign-zip/manage-card-assign-zip.component';
import { KountService } from './services/Kount.service';
import {Routes, RouterModule} from "@angular/router";
import {NotificationService} from "./services/notification/Notification.service";
import { NotificationComponent } from './components/notification/notification.component';
import {AuthGuard} from "./guards/authguard.guard";
import { AppLinkComponent } from './components/app-link/app-link.component';
import {ModalService} from "./services/modal/modal.service";
import { AcctSummaryComponent } from './components/acct-summary/acct-summary.component';
import { ManageCardPrintVirtualCardComponent } from './components/manageCard/manage-card-print-virtual-card/manage-card-print-virtual-card.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { ManageCardPrintTransactionsComponent } from './components/manageCard/manage-card-print-transactions/manage-card-print-transactions.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomePageComponent },
      { path: 'home', component: HomePageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'faq', component: FAQPageComponent },
      { path: 'about', component: AboutPageComponent},
      { path: 'manageCard', canActivate: [AuthGuard], component: ManageCardPageComponent},
      { path: 'cardHolderAgreement', component: CardholderAgreementsComponent },
      { path: 'aboutVanilla', component: AboutVanillaComponent},
      { path: 'managePin', component: ManagePinPageComponent},
    ],
    component: BasePageComponent
  },
  { path: 'printVirtualCard', canActivate: [AuthGuard], component: ManageCardPrintVirtualCardComponent },
  { path: 'printTransactions', canActivate: [AuthGuard], component: ManageCardPrintTransactionsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    NewsletterComponent,
    FaqItemComponent,
    ContactComponent,
    LoginPageComponent,
    HomePageComponent,
    FAQPageComponent,
    AcctMgmtTipsComponent,
    AcctMgmtTipsItemComponent,
    AboutPageComponent,
    AboutTabComponent,
    CardholderAgreementsComponent,
    TipBoxComponent,
    LogoutComponent,
    ManageCardPageComponent,
    AboutVanillaComponent,
    ManageCardVirtualCardSectionComponent,
    ManagePinComponent,
    ManagePinPageComponent,
    ManageCardBalAndTransComponent,
    ManageCardAssignZipComponent,
    NotificationComponent,
    AppLinkComponent,
    AcctSummaryComponent,
    ManageCardPrintVirtualCardComponent,
    BasePageComponent,
    ManageCardPrintTransactionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MarkdownToHtmlModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [ Title, CMSService, UserService, WindowRef, DocumentRef, GreenCard, NotificationService, AuthGuard, KountService, ModalService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
