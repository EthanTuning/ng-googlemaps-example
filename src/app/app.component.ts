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

  }

  markerDrag($event: MouseEvent) {

    this.lat = $event.coords.lat;
    this.long = $event.coords.lng;

  }

  private getClientCurrentLocation() {



  }

}
