import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="carousell">
    <section class="carousel" aria-label="Gallery">
  <ol class="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
        <img src="assets/R.jpg" alt="" id="R">
        <div id="text">
      <h1 style="text-transform: uppercase;">we design your space</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor</p>
    </div>
    <a href="#" class="click">See Our Projects</a>
        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide2"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
        <img src="assets/R.jpg" alt="" id="R">
        <div id="text">
      <h1 style="text-transform: uppercase;">we design your space</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor</p>
    </div>
    <a href="#" class="click">See Our Projects</a>
        <a href="#carousel__slide1"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide3"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
        <img src="assets/R.jpg" alt="" id="R">
        <div id="text">
      <h1 style="text-transform: uppercase;">we design your space</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor</p>
    </div>
    <a href="#" class="click">See Our Projects</a>
        <a href="#carousel__slide2"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide4"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        class="carousel__slide">
      <div class="carousel__snapper">
        <img src="assets/R.jpg" alt="" id="R">
        <div id="text">
      <h1 style="text-transform: uppercase;">we design your space</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor</p>
    </div>
    <a href="#" class="click">See Our Projects</a>
        <a href="#carousel__slide3"
           class="carousel__prev">Go to last slide</a>
        <a href="#carousel__slide1"
           class="carousel__next">Go to next slide</a>
      </div>
    </li>
  </ol>
  <aside class="carousel__navigation">
    <ol class="carousel__navigation-list">
      <li class="carousel__navigation-item">
        <a href="#carousel__slide1"
           class="carousel__navigation-button">Go to slide 1</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide2"
           class="carousel__navigation-button">Go to slide 2</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide3"
           class="carousel__navigation-button">Go to slide 3</a>
      </li>
      <li class="carousel__navigation-item">
        <a href="#carousel__slide4"
           class="carousel__navigation-button">Go to slide 4</a>
      </li>
    </ol>
  </aside>
</section>
</div>
  `,
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

}
