import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  images: string[] = [
    '/assets/images/carousel1.jpg',
    '/assets/images/carousel2.jpg',
    '/assets/images/carousel3.jpg',
  ];
}
