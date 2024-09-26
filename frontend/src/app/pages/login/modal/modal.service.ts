// modal.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isOpen = false;

  constructor() {}

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  isModalOpen(): boolean {
    return this.isOpen;
  }
}
