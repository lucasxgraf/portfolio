import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../../../core/components/header/header';

@Component({
  selector: 'app-hero',
  imports: [TranslateModule,
    Header
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  marqueeItems:string[] = [
    'HERO.MARQUEE.REMOTE_WORK',
    'HERO.MARQUEE.JOB_TITLE',
    'HERO.MARQUEE.LOCATION',
    'HERO.MARQUEE.OPEN_TO_WORK'
  ];
}
