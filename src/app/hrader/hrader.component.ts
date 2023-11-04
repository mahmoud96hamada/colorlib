import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hrader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="h">
    <div class="head" >
      <a href="https://colorlib.com/wp/templates/" class="logo">colorlib</a>
      <a href="" class="ararat">+ ARARAT</a>
      <a href="" class="x"></a>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      <span id="icons">
        <a href="">
        <span class="material-symbols-outlined" id="i">
          laptop_windows
        </span>
        </a>
        <a href="">
        <span class="material-symbols-outlined" id="i">
          tablet
        </span>
        </a>
        <a href="">
        <span class="material-symbols-outlined" id="i">
          smartphone
          </span>
        </a>
        <a href="https://colorlib.com/wp/template/ararat/#pricing">
        <span class="material-symbols-outlined" id="i2">
          shopping_cart
        </span>
        </a>
        <a href="">
        <span class="material-symbols-outlined" id="i2">
          close
        </span>
        </a>
      </span>
      
    </div>
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
