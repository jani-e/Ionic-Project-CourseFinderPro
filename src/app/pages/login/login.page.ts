import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private modalController: ModalController, private alertController: AlertController) { }

  @Input() email: string;
  @Input() password: string;

  ngOnInit() {
  }

  skipToHome() {
    this.router.navigate(['home']);
  }

  async loginWithGoogle() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert',
      header: 'Google',
      subHeader: 'Log in with Google?',
      buttons: ['Cancel', 'Log in']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

    if (!(role === 'cancel')) {
      this.skipToHome();
    }
  }

  loginWithCredentials() {
    if (this.email === "user@test.com" && this.password === "1234") {
      this.dismissModal();
      this.clearCredentials()
      this.skipToHome();
    } else {
      this.clearCredentials()
      this.invalidLoginAlert();
    }
  }

  clearCredentials() {
    this.email = null;
    this.password = null;
  }

  async invalidLoginAlert() {
    const alert = await this.alertController.create({
      cssClass: 'custom-alert',
      header: 'Login failed',
      subHeader: 'Invalid email or password',
      message: 'Hint: user@test.com, 1234',
      buttons: ['OK']
    });

    await alert.present();
  }

  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  

}
