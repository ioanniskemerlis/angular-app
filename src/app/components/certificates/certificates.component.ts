import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
  chef = {
    name: 'Chef Theodoros Ioannou',
    image: 'assets/images/chef.jpg', // Replace with the correct path
    bio: [
      `Passion, precision, and an unrelenting pursuit of culinary excellence define Chef Theodoros Ioannou. With a journey that began in Larissa, he honed his craft mastering the art of flavor, technique, and innovation. From the bustling kitchens of Michelin-starred ASPIC in Paris to leading as Executive Chef in some of Greece’s most luxurious hotels and restaurants, his experience is as diverse as it is impressive.`,
      
      `Chef Theodoros brings a deep respect for ingredients, blending tradition with modern creativity. His refined approach to crafting dishes tells a story on every plate. Now, as our Executive Chef, he curates a menu that embodies authenticity, innovation, and a passion for bold flavors.`,
      
      `Step into our kitchen and taste the artistry of a chef whose hands have shaped culinary experiences from Athens to Mykonos and beyond.`
    ]
  };
}
