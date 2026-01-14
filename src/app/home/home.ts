import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Map } from '../map/map';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-home',
  imports: [MatSlideToggleModule, MatSidenavModule, Map, MatListModule, MatIconModule ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  center: [number, number] = [0, 0];
  zoom = [3];

  // ngOnInit() {
  // //   navigator.geolocation.getCurrentPosition(
  // //     pos => {
  // //       this.center = [
  // //         pos.coords.longitude,
  // //         pos.coords.latitude
  // //       ];
  // //       this.zoom = [12];   // Google Maps–like zoom
  // //     },
  // //     () => {
  // //       // fallback if user blocks GPS
  // //       this.center = [10.4515, 51.1657]; // Germany
  // //       this.zoom = [6];
  // //     }
  // //   );
  // // }
}
