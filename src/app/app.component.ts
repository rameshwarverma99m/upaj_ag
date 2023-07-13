import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  showheader: boolean = true;
  showfooter: boolean = true;
  constructor (private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url.indexOf('/login') != -1 || event.url.indexOf('/signup') != -1 || event.url.indexOf('/forget-password') != -1 || event.url.indexOf('/reset-password') != -1) {
          this.showheader= false;
          this.showfooter = false;
        } else {
          this.showheader= true;
          this.showfooter = true;
        }
      }
    });
  }
}
