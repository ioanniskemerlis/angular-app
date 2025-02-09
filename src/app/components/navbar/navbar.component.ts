import { Component,Inject, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuEntry } from '../../services/interfaces/menu.entry';
import { CommonModule } from '@angular/common';
import { WINDOW } from '../../services/window.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavBarComponent {
  menu: MenuEntry[] = [
    { text: "Home", routerLink: "app-home"},
    { text: "Photos", routerLink: "app-photos"},
    { text: "Menu", routerLink: "app-menu"},
    { text: "Location", routerLink: "app-location"},
    { text: "Contact", routerLink: "app-contact"},
    { text: "Our Chef", routerLink: "app-certificates"},
  ]

  isMenuOpen = false;
  isMobile: boolean = false;

  constructor(@Inject(WINDOW) private window: Window | null) {
    // Ensure this logic is clear and satisfies TypeScript
    this.isMobile = this.getWindowWidth() <= 768;
  }

  private getWindowWidth(): number {
    return this.window ? this.window.innerWidth : 0; // Return 0 if window is null
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window | null; // Ensure type clarity
    this.isMobile = target?.innerWidth ? target.innerWidth <= 768 : false;

    if (!this.isMobile) {
      this.isMenuOpen = false;
    }
  }

toggleMenu() {
 this.isMenuOpen = !this.isMenuOpen;
  }

}
