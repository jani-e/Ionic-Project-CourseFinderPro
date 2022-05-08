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
  }

  details1() {
    alert("Here is information about the course 1.")
  }
  details2() {
    alert("This button gives additional information about the course 2.")
  }
  details3() {
    alert("This button gives you more details or maybe even a link to the course 3.")
  }


}


