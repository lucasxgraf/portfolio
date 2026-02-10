import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from "./about-me/about-me.component";

@Component({
  selector: 'app-portfolio',
  imports: [HeroComponent, AboutMeComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {

}
