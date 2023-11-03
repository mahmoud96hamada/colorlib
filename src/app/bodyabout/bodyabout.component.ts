import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bodyabout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="form">
    <img src="assets/R.jpg" alt="" class="img1">
    <div id="text">
      <h1 style="text-transform: uppercase;">about us</h1>
    </div>
  </div>
  `,
  styleUrls: ['./bodyabout.component.css']
})
export class BodyaboutComponent {

}
