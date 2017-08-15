import {Component, ViewChild, ElementRef} from '@angular/core';
import {CmsContentTypes} from 'app/cms/cms-content-types';
import {CMSService} from 'app/services/CMS.service';
import {ManageVirtualCardCmsModel} from '../manageCard-page/manageCard-cms-model';
import {UserService} from 'app/services/user/User.service';
import {UserStateComponent} from 'app/BaseComponent';
import {GreenCard} from '../../../services/greencard/GreenCard.service';
import { ImageModalModel } from 'app/services/modal/image-modal-model';
import { ModalService } from 'app/services/modal/modal.service';
import {WindowRef} from '../../../services/WindowRef';

@Component({
  selector: 'app-managecard-virtualcard-section',
  templateUrl: './manageCard-virtualCardSection.component.html',
  styleUrls: ['./manageCard-virtualCardSection.component.scss']
})
export class ManageCardVirtualCardSectionComponent extends UserStateComponent {
  @ViewChild('cardFrontCanvas') cardFrontCanvas: ElementRef;
  @ViewChild('cardBackCanvas') cardBackCanvas: ElementRef;
  @ViewChild('printVCContainer') printVCContainer: ElementRef;
  public manageVirtualCardCmsModel: ManageVirtualCardCmsModel = null;
  public frontVisible = true;
  public flipCardText = '';
  public cardImageData = '';
  public cardFrontData = null;
  public cardBackData = null;

  userStateChanged() {

  }

  cmsUpdated() {
    this.manageVirtualCardCmsModel = this.cmsService.getCmsChildComponent(ManageVirtualCardCmsModel,
      CmsContentTypes.PageManageCard,
      'manageVirtualCardComponent');
    if (this.manageVirtualCardCmsModel) {
      this.flipCardText = this.manageVirtualCardCmsModel.flipCardTextFront;
    }
  }

  flipCard() {
    this.frontVisible = !this.frontVisible;
    this.flipCardText = this.manageVirtualCardCmsModel ?
      (this.frontVisible ? this.manageVirtualCardCmsModel.flipCardTextFront : this.manageVirtualCardCmsModel.flipCardTextBack) : '';
    this.cardImageData = this.frontVisible ? this.cardFrontData : this.cardBackData;
  }

  displayVirtualCardModal() {
    const virtualCardModal = new ImageModalModel(true, true, this.cardImageData);
    this.modalService.displayImageModal(virtualCardModal);
  }

  printVirtualCard() {
    const target = this.printVCContainer.nativeElement.contentWindow;
    try {
      let result = target.document.execCommand('print', false, null);
      if (!result) {
        target.print();
      }
    } catch (e) {
      target.print();
    }
  }

  constructor(cmsService: CMSService, userService: UserService, private gcService: GreenCard, private windowRef: WindowRef, private modalService: ModalService) {
    super(cmsService, userService);
    this.cardImageData = this.cardFrontData;
    this.gcService.getCardImageFront().subscribe((res) => {
      this.cardFrontData = res['_body'];
      this.cardImageData = this.cardFrontData;
    });
    this.gcService.getCardImageBack().subscribe((res) => {
      this.cardBackData = res['_body'];
    });
  }
}
