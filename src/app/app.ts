import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from "./features/loader-component/loader-component";
import { HeroComponent } from './features/portfolio-component/hero-component/hero-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    LoaderComponent,
    HeroComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
