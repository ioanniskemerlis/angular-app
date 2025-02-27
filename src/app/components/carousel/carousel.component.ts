import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports:[CommonModule],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  slides = [
    { image: 'assets/images/carousel1.jpg', alt: 'First Slide' },
    { image: 'assets/images/dish11.jpg', alt: 'Pork' },
    { image: 'assets/images/dish3.jpg', alt: 'Popcorn Waffle' },
    { image: 'assets/images/dish4.jpg', alt: 'Paella' },
    { image: 'assets/images/dish55.jpg', alt: 'Shrimp Kataifi' },
    { image: 'assets/images/dish2.jpg', alt: 'octopus' },
  ];
}

