import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationService } from './translation.service';

describe('TranslationService', () => {
  let component: TranslationService;
  let fixture: ComponentFixture<TranslationService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslationService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
