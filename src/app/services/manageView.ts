import { Injectable } from '@angular/core';

@Injectable()
export class ManageViewService {
	viewSizeType = 'usual';

	manageSize(sizeType) {
		this.viewSizeType = sizeType;
	}
}
