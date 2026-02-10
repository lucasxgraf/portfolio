import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLangSubject = new BehaviorSubject<string>('en');
  public currentLang$ = this.currentLangSubject.asObservable();

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    this.changeLang('en');
  }

  changeLang(lang:string) {
    this.translate.use(lang);
    this.currentLangSubject.next(lang);

    document.documentElement.lang = lang;
  }
}
