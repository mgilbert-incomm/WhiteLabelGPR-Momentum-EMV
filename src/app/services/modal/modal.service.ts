import { Injectable } from '@angular/core';

import {ImageModalModel} from './image-modal-model';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {
  
  private imageModalSource = new Subject<ImageModalModel>();

  imageModal$ = this.imageModalSource.asObservable();

  displayImageModal(imageModalModel: ImageModalModel) {;    
      this.imageModalSource.next(imageModalModel);
  }

}
