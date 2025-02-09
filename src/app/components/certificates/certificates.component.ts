import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
  chef = {
    name: 'Chef Giovanni Rossi',
    image: 'assets/images/chef.jpg', // Replace with the correct path
    bio: `With over 30 years of culinary experience, Chef Giovanni Rossi has worked in some of the finest restaurants in Italy and France. 
          His passion for authentic flavors and fresh ingredients led him to open Oven Pub, where he continues to innovate while preserving 
          traditional Italian and Mediterranean recipes. Chef Giovanni believes in crafting dishes that tell a story, embracing both classic 
          and modern techniques to create unforgettable dining experiences.`
  };
}
