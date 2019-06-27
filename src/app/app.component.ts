import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader, MouseEvent } from '@agm/core'

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {
  
  title = 'ng-googlemaps-example';

  public lat: number;
  public long: number;
  public zoom: number;
  public searchControl: FormControl;

  @ViewChild("search", {static: false})
  public searchElementRef: ElementRef;

  constructor(
    
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  
  ) {}

  ngOnInit() {

    this.lat = 47.6587803;
    this.long = -117.4260466;
    this.zoom = 15;
    this.searchControl = new FormControl();

    this.mapsAPILoader.load().then(() => {

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);

      autocomplete.addListener("place_changed", () => {

        this.ngZone.run(() => {

          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
          
            return;
          
          }

          this.lat = place.geometry.location.lat();
          this.long = place.geometry.location.lng();

        });

      });

    });

  }

  markerDrag($event: MouseEvent) {

    this.lat = $event.coords.lat;
    this.long = $event.coords.lng;

  }

  private getClientCurrentLocation() {

    if("geolocation" in navigator) {

      navigator.geolocation.getCurrentPosition((position) => {
      
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;

      });

    }

  }

}
