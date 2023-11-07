import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-hrader></app-hrader>
    <router-outlet></router-outlet>
    <app-form/>
    <app-aboutus/>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colorlib1';
}
