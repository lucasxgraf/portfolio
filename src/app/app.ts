import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from "./core/components/loader/loader";
import { PortfolioComponent } from "./features/portfolio/portfolio.component";
import { ImprintComponent } from "./features/legal/imprint/imprint.component";
import { Header } from "./core/components/header/header";
import { Footer } from "./core/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    LoaderComponent,
    PortfolioComponent, ImprintComponent, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
