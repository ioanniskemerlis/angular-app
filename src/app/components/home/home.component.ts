import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { AboutComponent } from '../about/about.component';
import { LocationComponent } from '../location/location.component';
import { ContactComponent } from '../contact/contact.component';
import { PopularDishesComponent } from '../popular-dishes/popular-dishes.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent , AboutComponent, LocationComponent,ContactComponent,PopularDishesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
}
