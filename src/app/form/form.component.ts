import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  template: `
    <form action="" id="home">
    <div >
      <img src="assets/tower.jpg" alt="" class="img2">
      <div class="home2">
        <h1>25</h1>
        <p class="p1">years of experiance</p>
      </div>
    </div>
    <div id="f3">
      <span style="color: rgba(0, 0, 0, 0.344);">about us</span>
      <h3 style="text-transform: uppercase;">Architechtural plan <br>design and build</h3>
      <div class="seperator"></div>
      <p style="color: rgba(0, 0, 0, 0.344);">Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
          viverra maecenas accumsan lacus vel facilisis. </p>
    </div>
    <div class="f4">
      <ul >
        <li><span>Consectetur adipiscing sed do eiusmod.</span> </li>
        <li><span>Eiusmod tempor incididunt labore.</span></li>
      </ul>
      
    </div>
    <a href="#" class="aboutUs">about us</a>
  </form>
  `,
  styleUrls: ['./form.component.css']
})
export class FormComponent {

}
