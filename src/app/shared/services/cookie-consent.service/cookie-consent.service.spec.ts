import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieConsentService } from './cookie-consent.service';

describe('CookieConsentService', () => {
  let component: CookieConsentService;
  let fixture: ComponentFixture<CookieConsentService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieConsentService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookieConsentService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
