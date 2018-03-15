import { Injectable } from '@angular/core';

@Injectable()
export class ManageViewService {
	viewSizeType: string;

	manageSize(sizeType) {
		this.viewSizeType = sizeType;
	}
}
