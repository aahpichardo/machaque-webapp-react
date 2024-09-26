import { Component } from '@angular/core';
import { OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
}


export class ModalComponent implements OnInit {
  isModalOpen = false;

  constructor() {}

  ngOnInit(): void {}

  openModal(): void {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      this.focusFirstElement();
    });
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }

  closeModalOnOverlay(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent): void {
    if (this.isModalOpen) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.tab', ['$event'])
  handleTabKey(event: KeyboardEvent): void {
    if (this.isModalOpen) {
      const focusableElements = this.getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }

  private getFocusableElements(): HTMLElement[] {
    const modalElement = document.querySelector('.modal-content');
    if (modalElement) {
      return Array.from(modalElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
    }
    return [];
  }

  private focusFirstElement(): void {
    const focusableElements = this.getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }
}
