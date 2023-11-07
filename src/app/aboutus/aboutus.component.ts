import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <div class="about">
      <p>about us</p><br>
      <h1>Make your Dream with US</h1>
      </div>
      <div >
        <img src="assets/interior.jpg" alt="" class="interior">
        <div class="int">
          <h3 style="font-size: x-large;">Interior</h3>
          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse.</p>
        </div>
      </div>
      <div>
        <img src="assets/exterior.jpg" alt="" class="exterior">
        <div class="ext">
          <h3 style="font-size: x-large;">Exterior</h3>
          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse.</p>
        </div>
      </div>
      <div>
        <img src="assets/bridge.jpg" alt="" class="bridge">
        <div class="bri">
          <h3 style="font-size: x-large;">Bridge</h3>
          <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum suspendisse.</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

}
