import { Component } from '@angular/core';
import { Header } from "../../core/components/header/header";
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-portfolio',
  imports: [Header, 
    HeroComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {

}
