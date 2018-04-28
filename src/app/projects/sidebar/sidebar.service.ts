import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SidebarService {

  widthUpdate = new EventEmitter<string>();
  sidebarVisibleUpdate = new EventEmitter<boolean>();

  constructor() {
    this.widthUpdate.emit('0%');
  }

  toggleSidebar(sidebarVisible) {
    if (sidebarVisible) {
      this.widthUpdate.emit('0%'); // Close navbar
    } else {
      this.widthUpdate.emit('100%'); // Open navbar
    }
  }

  emitTrue() {
    this.sidebarVisibleUpdate.emit(true);
  }

}
