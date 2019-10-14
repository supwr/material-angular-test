import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  styleUrls: ['pages.component.scss'],
  template: `  
      <mat-sidenav-container class="example-container">
        <mat-sidenav mode="side" opened>Sidenav</mat-sidenav>
        <mat-sidenav-content><router-outlet></router-outlet></mat-sidenav-content>
      </mat-sidenav-container>            
  `,
})
export class PagesComponent {

}
