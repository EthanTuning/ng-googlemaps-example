import { Component } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core'

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  
  title = 'ng-googlemaps-example';
  lat: number = 47.6587803;
  long: number = -117.4260466;
  zoom: number = 15;

  markerDrag($event: MouseEvent) {

    this.lat = $event.coords.lat;
    this.long = $event.coords.lng;

  }

}
