import { Component } from '@angular/core';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  
  title = 'ng-googlemaps-example';
  initialLat: number = 47.6587803;
  initialLong: number = -117.4260466;

}
