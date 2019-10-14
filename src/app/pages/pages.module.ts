import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    PagesRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent,    
    FavoritesComponent,
  ],
})
export class PagesModule {
}
