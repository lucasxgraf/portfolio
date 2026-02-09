import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isEnglish = true;

  constructor(private languageService: LanguageService) {}

   changeLanguage() {
    this.isEnglish = !this.isEnglish;
    const lang = this.isEnglish ? 'en' : 'de';
    this.languageService.changeLang(lang);
  }

  get languageButtonSrc():string {
    return this.isEnglish
    ? "/assets/imgs/header/english-button.png"
    : "/assets/imgs/header/german-button.png";
  }

  get languageButtonHoverSrc():string {
    return this.isEnglish
    ? "/assets/imgs/header/english-button-hover.png"
    : "/assets/imgs/header/german-button-hover.png";
  }

  get languageButtonAlt():string {
    return this.isEnglish 
    ? "English button"
    : "German button";
  }

  get languageButtonHoverAlt():string {
    return this.isEnglish 
    ? "English button hover"
    : "German button hover";
  }
}
