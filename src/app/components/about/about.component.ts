import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [CommonModule]
})
export class AboutComponent {
  isExpanded: boolean = false; // Track whether the full text is shown

  // Define the restaurant history as an array of paragraphs
  aboutText: string[] = [
    "The story starts in 1971. A letter arrived at Stutgard City from my grandfather's best friend Aristidis that informed him that the building that you see, our Restaurant and Tree Standing, was in sale.",
    "My Grandfather right away got on a train to Italy, then a boat to Corfu and he bought the land from Aristidi's Father. He went back to Germany to take care of his familly and still work to build the dreams he had for all of us.",
    "1977 arrived and he decides to get everyone and get for a holiday back to Corfu to check things...As they arrived my Grand Mother, saw in front of the restaurant a garbage-bin, and inside was a root and plant she never saw before.She took it and planted it in the Middle of the Garden",
    "Without even knowing she made a move that took the family to where it stands today with a proud restaurant and a Brick Oven that was built by my Grandfather and two Italians from San Benedetto.",
    "One of his sons, Patrick, decided to open the place as a restaurant and Cocktail Bar in 1986 and called it Oven Pub as with eack cocktail they served, they offered a complimentary slice of pizza",
    "Our cuisine today is based on the traditional Recipes, Cooked in our Brick Olive Wood Oven, and amazing Italian dishes that remain original since the first days of the place and its establishment",
    "Generations come and go and i will always be dedicated to pass on our Taste, Values and Traditions as a Family to my son and the following generations that will serve you with quality as we do and serve with a Big Smile Daily!",
    "We wish you an amazing stay in our beautiful Corfu. Follow your traveling insticts",
    "",
    "<strong>The Metaxa family, General manager/owner, George Metaxa 2nd</strong>"

  ];

  toggleReadMore() {
    this.isExpanded = !this.isExpanded; // Toggle the expanded state
  }
}
