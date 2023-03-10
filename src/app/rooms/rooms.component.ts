import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  hotelName = "Oakwood"
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 0,
    availableRooms: 10,
    bookedRooms: 0
  };
  roomList: RoomList[] = []



  constructor() { }

  ngOnInit(): void {
    this.roomList = [{
      roomNumber: 1,
      amenities: 'AC',
      roomType: 'delux',
      price: 500,
      photos: 'kn',
      checkInTime: new Date('11-Jan-2021'),
      checkOutTime: new Date('27-Feb-2023')
    },
    {
      roomNumber: 2,
      amenities: 'AC1',
      roomType: 'delux1',
      price: 1000,
      photos: 'kn1',
      checkInTime: new Date('12-Jan-2021'),
      checkOutTime: new Date('9-Feb-2023')
    },
    {
      roomNumber: 3,
      amenities: 'AC2',
      roomType: 'delux2',
      price: 1500,
      photos: 'kn2',
      checkInTime: new Date('10-Jan-2021'),
      checkOutTime: new Date('2-Feb-2023')
    }]
  }

  toggle() {
    this.hideRooms = !this.hideRooms
  }

}
