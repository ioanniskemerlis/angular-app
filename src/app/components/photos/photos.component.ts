import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.scss'
})
export class PhotosComponent {
  dishes = [
    { src: 'assets/images/dish1.jpg', name: 'Wild Boar Pancetta' },
    { src: 'assets/images/dish2.jpg', name: 'Octopus with Split Peas' },
    { src: 'assets/images/dish3.jpg', name: 'Popcorn Wafer Tart' },
    { src: 'assets/images/dish4.jpg', name: 'Paella' },
    { src: 'assets/images/dish5.jpg', name: 'Shrimp Kataifi' },
    { src: 'assets/images/moussaka.jpg', name: 'Moussaka' },
    { src: 'assets/images/mussels.jpg', name: 'Steamed Mussels' },
    { src: 'assets/images/saganaki.jpg', name: 'Saganaki Prawns' },
    { src: 'assets/images/stonebakedfeta.jpg', name: 'Stone Baked Feta' },
    { src: 'assets/images/chickencrispy.jpg', name: 'Napoli Crispy corn chicken dippers' },
    { src: 'assets/images/bolonez.jpg', name: 'Bolognese casarecce' },
    { src: 'assets/images/napolitan.jpg', name: 'Napoli' },
  ];

  selectedDish: { src: string; name: string } | null = null;

  openImage(dish: { src: string; name: string }) {
    this.selectedDish = dish;
  }

  closeImage() {
    this.selectedDish = null;
  }
}