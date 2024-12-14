import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  whatsappNumber: string = '+306974970267'; // Example: 1234567890
  googlePlacesUrl: string = 'https://www.google.com/search?sa=X&sca_esv=1cf6057d4b1ab75c&tbm=lcl&sxsrf=ADLYWII-zc0oXFOXo3s9Vjo87hvg_6Sxeg:1733587774961&q=Mediterranean+Restaurant,+Wood+Oven-local+Cuisine,+Pizza+%CE%91%CE%BE%CE%B9%CE%BF%CE%BB%CE%BF%CE%B3%CE%AE%CF%83%CE%B5%CE%B9%CF%82&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLQwNTQzNzQyMzUxMDAwNDAyMd7AyPiKMdA3NSWzJLWoKDEvNTFPISi1uCSxFMgp0VEIz89PUfAvS83TzclPTsxRcC7NLM7MS9VRCMisqkpUODfx3L5zO8_tP7cbiDefW3e--dzWczvPNy1ipb6ZANj4c37DAAAA&rldimm=11851671265400010243&hl=el-GR&ved=2ahUKEwjkvo3chZaKAxVDQPEDHbGQCt0Q9fQKegQIVRAF&biw=1920&bih=919&dpr=1#lkt=LocalPoiReviews'; // Link to Google Places

  connectWhatsApp(): void {
    const whatsappLink = `https://wa.me/${this.whatsappNumber}?text=Hello%2Chow+can+we+help+you+with+your+reservation+today%3F`;
    window.open(whatsappLink, '_blank');
  }

  openGooglePlaces(): void {
    window.open(this.googlePlacesUrl, '_blank');
  }
}
