import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-dishes',
  standalone: true,
  templateUrl: './popular-dishes.component.html',
  styleUrls: ['./popular-dishes.component.scss'],
  imports:[CommonModule]
})
export class PopularDishesComponent {
  dishes = [
    {
      name: 'Shrimp Kataifi',
      description: 'Two classic flavours from land of the sun. Fresh shrimps wrapped with crunchy kataifi, served with spicy sauce.',
      image: 'assets/images/dish5.jpg'
    },
    {
      name: 'Traditional Black Pork Pancetta',
      description: 'Recipe from our mountains, slow cooked pork pancetta, served with mashed potatoes and caramelised sauce.',
      image: 'assets/images/dish1.jpg'
    },
    {
      name: 'Pasta Carbonara',
      description: 'Spaghetti tossed with creamy sauce, pancetta, and parmesan cheese.',
      image: 'assets/images/carbonara.jpg'
    },
    {
      name: 'Local Mixed Stoned Baked Original Paella',
      description: 'Healthy and fresh seafood dish, served with aromatic rice, squid, mussels, shrimps and chicken fillet.',
      image: 'assets/images/dish4.jpg'
    },
    {
      name: 'Popcorn Wafer Tart',
      description: 'Served with namelaka milk chocolate, white chocolate cream and popcorn wafer.',
      image: 'assets/images/dish3.jpg'
    }
  ];
}
