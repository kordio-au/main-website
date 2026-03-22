// ==================== COMING SOON TOGGLE ====================
// Set to false when ready to launch the full website
const COMING_SOON = false;

if (COMING_SOON) {
  document.addEventListener('DOMContentLoaded', () => {
    // Hide all page content
    document.body.style.overflow = 'hidden';

    // Create coming soon overlay
    const overlay = document.createElement('div');
    overlay.id = 'coming-soon-overlay';
    overlay.innerHTML = `
      <style>
        #coming-soon-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          background: #2a0548;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', system-ui, sans-serif;
        }
        #coming-soon-overlay * { box-sizing: border-box; }
        .cs-container {
          text-align: center;
          padding: 2rem;
          max-width: 600px;
          width: 100%;
        }
        .cs-logo {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #3b0764, #7c3aed);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 8px 30px rgba(59, 7, 100, 0.4);
        }
        .cs-logo span {
          color: white;
          font-weight: 800;
          font-size: 1.5rem;
        }
        .cs-brand {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
        }
        .cs-heading {
          color: white;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .cs-heading span {
          background: linear-gradient(135deg, #7c3aed, #a855f7, #c084fc, #7c3aed);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: cs-gradient 6s ease infinite;
        }
        @keyframes cs-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .cs-text {
          color: rgba(255, 255, 255, 0.5);
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }
        .cs-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #3b0764;
          color: white;
          padding: 0.875rem 2rem;
          border-radius: 0.75rem;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(59, 7, 100, 0.3);
          margin-bottom: 2rem;
        }
        .cs-cta:hover {
          background: #5b21b6;
          box-shadow: 0 8px 40px rgba(59, 7, 100, 0.5);
          transform: translateY(-2px);
        }
        .cs-footer {
          color: rgba(255, 255, 255, 0.25);
          font-size: 0.75rem;
          margin-top: 3rem;
        }
        .cs-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
        }
        .cs-glow-1 {
          top: 10%;
          left: 20%;
          width: 400px;
          height: 400px;
          background: rgba(59, 7, 100, 0.3);
        }
        .cs-glow-2 {
          bottom: 10%;
          right: 15%;
          width: 300px;
          height: 300px;
          background: rgba(124, 58, 237, 0.15);
        }
      </style>
      <div class="cs-glow cs-glow-1"></div>
      <div class="cs-glow cs-glow-2"></div>
      <div class="cs-container">
        <div class="cs-logo"><span>K</span></div>
        <p class="cs-brand">Kordio</p>
        <h1 class="cs-heading">Something Big is <span>Coming Soon.</span></h1>
        <p class="cs-text">We're building AI-powered solutions that will transform how restaurants handle phone calls, orders, and customer interactions.</p>
        <a href="mailto:hello@kordio.com.au" class="cs-cta">
          Get Notified
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
        <p class="cs-footer">&copy; 2026 Kordio. Built in Australia.</p>
      </div>
    `;

    document.body.appendChild(overlay);
  });
}
