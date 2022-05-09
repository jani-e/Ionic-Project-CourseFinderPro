import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(private router: Router, private menuCtrl: MenuController) {
    this.menuCtrl.swipeGesture(false);
  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 2000);
  }

}
