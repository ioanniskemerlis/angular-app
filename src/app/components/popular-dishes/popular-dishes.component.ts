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
      name: 'Margherita Pizza',
      description: 'A classic pizza topped with fresh tomatoes, mozzarella, and basil.',
      image: 'assets/images/margherita.jpg'
    },
    {
      name: 'Pepperoni Pizza',
      description: 'Topped with spicy pepperoni, mozzarella cheese, and tomato sauce.',
      image: 'assets/images/pepperoni.jpg'
    },
    {
      name: 'Pasta Carbonara',
      description: 'Spaghetti tossed with creamy sauce, pancetta, and parmesan cheese.',
      image: 'assets/images/carbonara.jpg'
    }
  ];
}
