document.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const scrollProgress = document.querySelector('.scroll-progress');

  // ========== Particles.js Configuration ==========
  console.log('🔧 Checking particles.js availability:', typeof particlesJS);
  
  // Check if particles container exists
  const particlesContainer = document.getElementById('particles-js');
  console.log('📦 Particles container found:', !!particlesContainer);
  
  // Check if particles.js is loaded
  if (typeof particlesJS === 'undefined') {
    console.error('❌ particles.js not loaded! Check the script tag.');
    return;
  }
  
  if (!particlesContainer) {
    console.error('❌ particles-js container not found! Check HTML.');
    return;
  }
  
  // Load particles configuration from JSON file
  fetch('./assets/js/particles-config.json')
    .then(response => {
      console.log('📦 Config response status:', response.status);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(config => {
      console.log('✅ Particles config loaded:', config);
      particlesJS('particles-js', config);
      console.log('🎉 Particles.js initialized successfully!');
    })
    .catch(error => {
      console.warn('⚠️ Particles config not loaded:', error);
      // Fallback configuration
      console.log('🔄 Using fallback configuration...');
      particlesJS('particles-js', {
        particles: {
          number: { value: 50, density: { enable: true, value_area: 800 } },
          color: { value: "#d4af37" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#d4af37", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 4 }
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
          modes: { repulse: { distance: 150, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
      });
      console.log('✅ Fallback particles initialized!');
    });

  // ========== Custom Cursor ==========
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  // Only enable custom cursor on non-touch devices
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (!isTouchDevice && cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    // Smooth cursor follower
    function animateCursorFollower() {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      
      cursorFollower.style.left = followerX + 'px';
      cursorFollower.style.top = followerY + 'px';
      
      requestAnimationFrame(animateCursorFollower);
    }
    animateCursorFollower();

    // Create cursor particles on click
    document.addEventListener('click', (e) => {
      createCursorParticle(e.clientX, e.clientY);
    });

    function createCursorParticle(x, y) {
      for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.className = 'cursor-particle';
        particle.style.left = x + (Math.random() - 0.5) * 20 + 'px';
        particle.style.top = y + (Math.random() - 0.5) * 20 + 'px';
        document.body.appendChild(particle);
        
        setTimeout(() => {
          particle.remove();
        }, 1000);
      }
    }

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
      cursorFollower.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      cursor.style.opacity = '1';
      cursorFollower.style.opacity = '1';
    });
  } else {
    // Hide cursor elements on touch devices
    if (cursor) cursor.style.display = 'none';
    if (cursorFollower) cursorFollower.style.display = 'none';
  }

  // ========== Navigasi Mobile Toggle ==========
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Menutup menu saat link diklik
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // ========== Fungsi-fungsi terkait Scroll ==========
  function handleScroll() {
    const scrollTop = window.pageYOffset;

    // Header background & shadow
    header.classList.toggle('scrolled', scrollTop > 50);

    // Scroll Progress Bar
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.width = `${progress}%`;

    // Active Navigation Link
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - header.clientHeight - 50;
      if (scrollTop >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);

  // ========== Scroll Reveal Animation ==========
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-reveal]').forEach(element => {
    revealObserver.observe(element);
  });

  // ========== Modal Logic (Event Delegation) ==========
  const modals = document.querySelectorAll('.modal');
  
  // Fungsi untuk membuka modal
  function openModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.add('active');
      document.body.style.overflow = 'hidden';
  }

  // Fungsi untuk menutup modal
  function closeModal(modal) {
      if (modal) modal.classList.remove('active');
      document.body.style.overflow = 'auto';
  }

  // Event listener untuk membuka modal
  document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-modal-target]');
      if (target) {
          e.preventDefault();
          const modalId = target.dataset.modalTarget;
          openModal(modalId);
      }
  });

  // Event listener untuk menutup modal
  modals.forEach(modal => {
      modal.addEventListener('click', (e) => {
          // Tutup jika klik pada background modal atau tombol close
          if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
              closeModal(modal);
          }
      });
  });
  
  // Tutup modal dengan tombol Escape
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
          modals.forEach(modal => closeModal(modal));
      }
  });

  console.log('✅ Portfolio website initialized successfully!');
});