import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ContactModalComponent } from '../shared/contact-modal/contact-modal.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

   @ViewChild('myModal') myModal:ElementRef;

   /* lat: number = 22.502919;
   lng: number = 88.380085; */

  
  // initial center position for the map
  lat: number = 22.502919;
  lng: number = 88.380085;

  markers = [
    { latitude: 22.502919, longitude: 88.380085 }
    ];


  constructor(private modalService: NgbModal) { }
  ngOnInit() { }

  ngAfterViewInit () {
     setTimeout(() =>{
       this.myModal.nativeElement.click();
     }, 15000)
  }

  placeMarker(position: any) {
    const lat = position.coords.lat;
    const lng = position.coords.lng;
    
    this.markers.push({ latitude: lat, longitude: lng });
    }
  
  openModal() {
    this.modalService.open(ContactModalComponent);
  }

  

}
