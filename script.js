// ==================== KORDIO — SCRIPTS ====================
document.addEventListener('DOMContentLoaded', () => {

  // ==================== SCROLL ANIMATIONS ====================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

  // ==================== NAVBAR SHADOW ON SCROLL ====================
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }

  // ==================== ANIMATED COUNTERS ====================
  const counters = document.querySelectorAll('.counter');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const duration = 2000;
    const start = performance.now();
    const isDecimal = target % 1 !== 0;

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      if (isDecimal) {
        el.textContent = current.toFixed(1);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        if (isDecimal) {
          el.textContent = target.toFixed(1);
        } else {
          el.textContent = target.toLocaleString();
        }
      }
    }

    requestAnimationFrame(update);
  }

  // ==================== WAVE CANVAS ANIMATION ====================
  const canvas = document.getElementById('waveCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    function resize() {
      const section = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = section.offsetWidth * dpr;
      canvas.height = section.offsetHeight * dpr;
      canvas.style.width = section.offsetWidth + 'px';
      canvas.style.height = section.offsetHeight + 'px';
      ctx.scale(dpr, dpr);
    }

    resize();
    window.addEventListener('resize', resize);

    const waves = [
      { amplitude: 30, wavelength: 0.003, speed: 0.015, yOffset: 0.75, color: 'rgba(59, 7, 100, 0.12)' },
      { amplitude: 20, wavelength: 0.005, speed: 0.02, yOffset: 0.78, color: 'rgba(124, 58, 237, 0.08)' },
      { amplitude: 25, wavelength: 0.004, speed: 0.012, yOffset: 0.82, color: 'rgba(168, 85, 247, 0.06)' },
      { amplitude: 15, wavelength: 0.006, speed: 0.025, yOffset: 0.72, color: 'rgba(59, 7, 100, 0.06)' },
    ];

    function drawWave(wave) {
      const w = canvas.style.width ? parseInt(canvas.style.width) : canvas.width;
      const h = canvas.style.height ? parseInt(canvas.style.height) : canvas.height;

      ctx.beginPath();
      ctx.moveTo(0, h);

      for (let x = 0; x <= w; x += 2) {
        const y = h * wave.yOffset +
          Math.sin(x * wave.wavelength + time * wave.speed) * wave.amplitude +
          Math.sin(x * wave.wavelength * 0.5 + time * wave.speed * 1.3) * wave.amplitude * 0.5;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = wave.color;
      ctx.fill();
    }

    function animate() {
      const w = canvas.style.width ? parseInt(canvas.style.width) : canvas.width;
      const h = canvas.style.height ? parseInt(canvas.style.height) : canvas.height;

      ctx.clearRect(0, 0, w, h);
      waves.forEach(drawWave);
      time++;
      animationId = requestAnimationFrame(animate);
    }

    animate();

    // Pause when not visible
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!animationId) animate();
        } else {
          cancelAnimationFrame(animationId);
          animationId = null;
        }
      });
    }, { threshold: 0 });

    heroObserver.observe(canvas.parentElement);
  }

});
