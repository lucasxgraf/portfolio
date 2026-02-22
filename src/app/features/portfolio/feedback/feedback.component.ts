import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements AfterViewInit, OnDestroy {
  feedbacks = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  @ViewChildren('card', { read: ElementRef }) cards!: QueryList<ElementRef<HTMLElement>>;

  private mm!: gsap.MatchMedia;

  ngAfterViewInit() {
    this.mm = gsap.matchMedia();

    this.mm.add({
      isDesktop: "(min-width: 901px)",
      isTablet: "(min-width: 601px) and (max-width: 900px)",
      isMobile: "(max-width: 600px)"
    }, (context) => {
      const isDesktop = context.conditions?.["isDesktop"] ?? false;
      const isTablet = context.conditions?.["isTablet"] ?? false;
      const isMobile = context.conditions?.["isMobile"] ?? false;

      ScrollTrigger.getAll().forEach(t => t.kill());

      this.cards.forEach((cardRef) => {
        const el = cardRef.nativeElement as HTMLElement;
        const content = el.querySelector('.card__content') as HTMLElement | null;
        const numberEl = el.querySelector('.number') as HTMLElement | null;

        if (!content) return;

        gsap.set(content, {
          autoAlpha: isMobile ? 1 : 0,
          y: isMobile ? 0 : 50,
          scale: isMobile ? 1 : 0.98,
          rotationX: 0,
          rotationY: 0,
          transformPerspective: 1000,
          transformOrigin: 'center'
        });

        if (isDesktop) {
          gsap.to(content, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          });

          if (numberEl) {
            gsap.fromTo(numberEl, { y: 40 }, {
              y: -30,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            });
          }

          const maxTilt = 8;
          const onMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const px = (e.clientX - rect.left) / rect.width;
            const py = (e.clientY - rect.top) / rect.height;
            const rotY = (px - 0.5) * maxTilt;
            const rotX = (0.5 - py) * maxTilt;
            gsap.to(content, { rotationY: rotY, rotationX: rotX, duration: 0.45, ease: 'power3.out' });
          };
          const onLeave = () => gsap.to(content, { rotationY: 0, rotationX: 0, duration: 0.7, ease: 'power3.out' });

          el.addEventListener('mousemove', onMove);
          el.addEventListener('mouseleave', onLeave);

          (el as any)._gs_onMove = onMove;
          (el as any)._gs_onLeave = onLeave;

        } else if (isTablet) {
          gsap.to(content, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          });

          if (numberEl) {
            gsap.fromTo(numberEl, { y: 30 }, {
              y: -20,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            });
          }
        } else {
          gsap.to(content, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 95%',
              toggleActions: 'play none none reverse'
            }
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
        this.cards.forEach(cardRef => {
          const el = cardRef.nativeElement as any;
          if (el._gs_onMove) {
            el.removeEventListener('mousemove', el._gs_onMove);
            el.removeEventListener('mouseleave', el._gs_onLeave);
            delete el._gs_onMove;
            delete el._gs_onLeave;
          }
        });
      };
    });
  }

  ngOnDestroy() {
    try {
      if (this.mm) this.mm.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.killTweensOf('*');
    } catch (e) {
      // safe
    }
  }
}