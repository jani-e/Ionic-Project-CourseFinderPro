import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private modalController: ModalController) { }

  @Input() email: string;
  @Input() password: string;

  ngOnInit() {
  }

  skipToHome() {
    this.router.navigate(['home']);
  }

  loginWithGoogle() {
    this.skipToHome();
  }

  loginWithCredentials() {
    if (this.email === "test@test.com" && this.password === "1234") {
      this.dismissModal();
      this.skipToHome();
    } else {
      console.log("not ok")
    }
  }

  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
