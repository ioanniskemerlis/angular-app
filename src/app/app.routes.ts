import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotosComponent } from './components/photos/photos.component';
import { MenuComponent } from './components/menu/menu.component';
import { LocationComponent } from './components/location/location.component';
import { ContactComponent } from './components/contact/contact.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'app-photos', component: PhotosComponent },
  { path: 'app-menu', component: MenuComponent },
  { path: 'app-location', component: LocationComponent },
  { path: 'app-contact', component: ContactComponent },
  { path: 'app-certificates', component: CertificatesComponent },
  { path: 'app-navbar', component: NavBarComponent},
  { path: 'app-home', component: HomeComponent},
  { path: 'app-about', component: AboutComponent},
];
