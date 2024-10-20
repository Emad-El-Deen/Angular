import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProductsComponent } from './Components/products/products.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[authGuard] },
  { path: 'products', component: ProductsComponent },
  { path: '**', component: NotFoundComponent },
];
