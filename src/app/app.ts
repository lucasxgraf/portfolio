import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from "./core/components/loader/loader";
import { PortfolioComponent } from "./features/portfolio/portfolio.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    LoaderComponent, 
    PortfolioComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
