import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  constructor() { }

  container = document.getElementById("content");

  ngOnInit() {
    //this.container.innerHTML = "<div class='course'><ion-grid><ion-row><ion-col class='courseName'>Course name</ion-col><ion-col ></ion-col><ion-col ><ion-icon name='image-outline'></ion-icon></ion-col></ion-row><ion-row><ion-col class='courseStatus'>Course status</ion-col><ion-col ></ion-col><ion-col ><ion-button size='small' (click)='details()'><ion-icon name='ellipsis-horizontal-outline'></ion-icon></ion-button></ion-col></ion-row><ion-row><ion-col >dd.mm.yyyy hh:mm</ion-col></ion-row></ion-grid></div>";
    // this.container.innerText= "Hello"
  }

  details() {
    console.log('You want some details right?')
  }


}


