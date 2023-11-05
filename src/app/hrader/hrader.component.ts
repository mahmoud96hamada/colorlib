import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hrader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="h">
    
    <div class="menu">
      <img src="assets/araratimg.jpg" alt="" class="imgararat">
      
    </div>
    <ul>
        <a href="http://localhost:4200/home" id="menu2"><li>home</li></a>
        <a href="http://localhost:4200/about" id="menu2"><li>about</li></a>
      </ul>
    
  </div>
  `,
  styleUrls: ['./hrader.component.css']
})
export class HraderComponent {

}
