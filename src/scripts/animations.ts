/**
 * Nieves Galindo — Scroll Animations
 * Uses GSAP ScrollTrigger for reveal animations and section transitions
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ---- Scroll-triggered reveal animations ----
export function initRevealAnimations() {
  const revealElements = document.querySelectorAll('[data-reveal]');

  revealElements.forEach((el) => {
    const direction = el.getAttribute('data-reveal') || 'up';
    const htmlEl = el as HTMLElement;

    let fromVars: gsap.TweenVars = { opacity: 0, y: 50 };

    if (direction === 'left') {
      fromVars = { opacity: 0, x: -60 };
    } else if (direction === 'right') {
      fromVars = { opacity: 0, x: 60 };
    } else if (direction === 'scale') {
      fromVars = { opacity: 0, scale: 0.92 };
    }

    gsap.fromTo(el, fromVars, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  });
}

// ---- Staggered timeline items ----
export function initTimelineAnimations() {
  const items = document.querySelectorAll('.timeline-item');
  if (items.length === 0) return;

  items.forEach((item, i) => {
    gsap.fromTo(item,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });
}

// ---- Flavor cards staggered entrance ----
export function initFlavorCardAnimations() {
  const cards = document.querySelectorAll('.flavor-card');
  if (cards.length === 0) return;

  cards.forEach((card, i) => {
    gsap.fromTo(card,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        delay: i * 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });
}

// ---- Footer entrance ----
export function initFooterAnimation() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  gsap.fromTo(footer,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: footer,
        start: 'top 92%',
        toggleActions: 'play none none none',
        once: true,
      },
    }
  );

  document.querySelectorAll('.social-link').forEach((link, i) => {
    gsap.fromTo(link,
      { opacity: 0, y: 20, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.footer-socials',
          start: 'top 92%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });
}

// ---- Initialize all animations ----
export function initAllAnimations() {
  initRevealAnimations();
  initTimelineAnimations();
  initFlavorCardAnimations();
  initFooterAnimation();

  // Refresh ScrollTrigger after a brief delay to account for images loading
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
}
