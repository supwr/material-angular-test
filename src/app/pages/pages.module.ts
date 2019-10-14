import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    PagesRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule
  ],
  declarations: [
    PagesComponent,    
    FavoritesComponent,
  ],
})
export class PagesModule {
}
