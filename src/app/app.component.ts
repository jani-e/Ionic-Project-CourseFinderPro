import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Studies', url: '/studies', icon: 'albums' },
    { title: 'Schedule', url: '/schedule', icon: 'calendar' },
    { title: 'About', url: '/about', icon: 'help' },
    { title: 'Contact', url: '/contact', icon: 'mail' },
    { title: 'Login', url: '/login', icon: 'log-in' },
  ];
  
  constructor() {}

}
