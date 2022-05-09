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
    alert("First day of school - introductions")
  }
  details2() {
    alert("Starter course for Java language coding.")
  }
  details3() {
    alert("Starter course for Python language coding.")
  }


}


