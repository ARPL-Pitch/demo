


// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);



// Hero section animations
const heroTimeline = gsap.timeline({ delay: 1 });

heroTimeline
  .to('.hero-title', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power4.out'
  })
  .to('.hero-subtitle', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power4.out'
  }, '-=0.7')
  .to('.cta-button', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: 'power4.out'
  }, '-=0.7')
  .to('.scroll-indicator', {
    opacity: 1,
    duration: 1,
    ease: 'power4.out'
  }, '-=0.5');



// Show translucent overlay on scroll
gsap.to('.translucent-overlay', {
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'bottom center',
    end: 'bottom top',
    scrub: true
  },
  opacity: 1
});

// Text split animation for the title
const splitText = new SplitText('.hero-title', { type: 'chars' });
gsap.from(splitText.chars, {
  duration: 1,
  scale: 0,
  y: 100,
  rotationX: 180,
  transformOrigin: '0% 50% -50',
  ease: 'back',
  stagger: 0.01
});



// BACKGROUND ANIMATIONSSSS//

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");

  // Set canvas size to full screen
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Particle class
  class Particle {
      constructor(x, y, size, speedX, speedY, color) {
          this.x = x;
          this.y = y;
          this.size = size;
          this.speedX = speedX;
          this.speedY = speedY;
          this.color = color;
          this.baseSize = size;
      }

      update() {
          this.x += this.speedX;
          this.y += this.speedY;

          // Reset particle if it goes off screen
          if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
              this.x = Math.random() * canvas.width;
              this.y = Math.random() * canvas.height;
          }
      }

      draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

          // Add glow effect
          ctx.shadowBlur = 10;
          ctx.shadowColor = this.color;

          // Fill particle with a gradient for elegance
          const gradient = ctx.createRadialGradient(
              this.x, this.y, 0, this.x, this.y, this.size
          );
          gradient.addColorStop(0, this.color);
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

          ctx.fillStyle = gradient;
          ctx.fill();
      }
  }

  // Create particles
  const particles = [];
  const colors = ["rgba(255, 255, 255, 0.8)", "rgba(200, 200, 255, 0.8)", "rgba(255, 200, 200, 0.8)"]; // Elegant color variations
  for (let i = 0; i < 150; i++) {
      const size = Math.random() * 3 + 1; // Slightly larger particles
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const speedX = (Math.random() - 0.5) * 0.5;
      const speedY = (Math.random() - 0.5) * 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)]; // Random elegant color
      particles.push(new Particle(x, y, size, speedX, speedY, color));
  }

  // Animation loop
  function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
          particle.update();
          particle.draw();
      });
      requestAnimationFrame(animate);
  }

  animate();

  // Resize canvas on window resize
  window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  });

  // Add mouse interaction for elegance
  window.addEventListener("mousemove", (e) => {
      particles.forEach(particle => {
          const dx = e.clientX - particle.x;
          const dy = e.clientY - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
              gsap.to(particle, {
                  x: particle.x - dx * 0.05,
                  y: particle.y - dy * 0.05,
                  size: particle.baseSize * 1.5, // Slightly enlarge particles near the cursor
                  duration: 0.5,
                  ease: "power2.out",
              });
          } else {
              gsap.to(particle, {
                  size: particle.baseSize, // Reset size
                  duration: 0.5,
                  ease: "power2.out",
              });
          }
      });
  });
});