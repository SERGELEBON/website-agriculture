/**
 * Security utilities for protecting the website
 */

// Anti-scraping protection
export function initAntiScraping(): void {
  // Disable right-click on images
  document.addEventListener('contextmenu', (e) => {
    if ((e.target as HTMLElement).tagName === 'IMG') {
      e.preventDefault();
    }
  });

  // Disable keyboard shortcuts for saving
  document.addEventListener('keydown', (e) => {
    // Ctrl+S, Ctrl+U, Ctrl+Shift+I, F12
    if (
      (e.ctrlKey && (e.key === 's' || e.key === 'u')) ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      e.key === 'F12'
    ) {
      // Don't prevent F12 and dev tools - it's bad practice and ineffective
      // Just prevent save and view source
      if (e.ctrlKey && (e.key === 's' || e.key === 'u')) {
        e.preventDefault();
      }
    }
  });

  // Add watermark to images (optional)
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.setAttribute('draggable', 'false');
    img.style.userSelect = 'none';
    img.style.pointerEvents = 'none';
    
    // Re-enable pointer events for the container
    img.parentElement?.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
}

// Rate limiting for form submissions
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts = 5, windowMs = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  canProceed(key: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    return true;
  }

  getRemainingTime(key: string): number {
    const attempts = this.attempts.get(key) || [];
    if (attempts.length === 0) return 0;
    
    const oldestAttempt = Math.min(...attempts);
    const remaining = this.windowMs - (Date.now() - oldestAttempt);
    return Math.max(0, remaining);
  }
}

// XSS Prevention
export function sanitizeInput(input: string): string {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

// Email obfuscation
export function obfuscateEmail(email: string): string {
  return email.replace('@', ' [at] ').replace('.', ' [dot] ');
}

// Generate security headers meta tags
export function generateSecurityMetaTags(): string {
  return `
    <!-- Content Security Policy -->
    <meta http-equiv="Content-Security-Policy" content="
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://wa.me;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https: blob:;
      connect-src 'self' https://api.emailjs.com;
      frame-src https://wa.me;
      base-uri 'self';
      form-action 'self';
    ">
    
    <!-- X-Frame-Options -->
    <meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
    
    <!-- X-Content-Type-Options -->
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    
    <!-- Referrer Policy -->
    <meta name="referrer" content="strict-origin-when-cross-origin">
    
    <!-- Permissions Policy -->
    <meta http-equiv="Permissions-Policy" content="
      camera=(),
      microphone=(),
      geolocation=(),
      payment=(),
      usb=(),
      magnetometer=(),
      gyroscope=(),
      accelerometer=()
    ">
  `;
}

// Bot detection
export function isBot(): boolean {
  const botPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /curl/i,
    /wget/i,
    /python-requests/i,
    /scrapy/i,
    /headless/i,
  ];
  
  const userAgent = navigator.userAgent;
  return botPatterns.some(pattern => pattern.test(userAgent));
}

// Initialize all security measures
export function initSecurity(): void {
  // Don't run on bots
  if (isBot()) {
    console.log('Bot detected - security measures active');
  }

  // Initialize anti-scraping
  initAntiScraping();

  // Add security class to body
  document.body.classList.add('security-enabled');

  // Log security initialization
  console.log('%c🔒 Security measures initialized', 'color: #22c55e; font-weight: bold;');
}
