// File: main.js
// Kode JavaScript untuk website portofolio single-page
// Dikembangkan oleh: Pangeran Borneo Silaen

// Menunggu dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

  // ========== Navigasi Mobile Toggle ==========
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle menu mobile saat hamburger menu di klik
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Menutup menu mobile saat link di klik
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  });

  // ========== Smooth Scrolling untuk Navigasi ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Dapatkan target section dari href
      const targetId = this.getAttribute('href');
      
      // Pastikan targetId bukan hanya '#'
      if (targetId !== '#') {
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          // Scroll ke section target dengan animasi smooth
          window.scrollTo({
            top: targetSection.offsetTop - 80, // Offset untuk header
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // ========== Active Menu pada Scrolling ==========
  // Dapatkan semua section yang memiliki ID
  const sections = document.querySelectorAll('section[id]');
  
  // Fungsi untuk menambahkan class active pada menu yang sesuai dengan section yang sedang dilihat
  function highlightActiveMenu() {
    // Dapatkan posisi scroll saat ini
    const scrollPosition = window.scrollY;
    
    // Periksa setiap section
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150; // Offset untuk header
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      // Jika posisi scroll berada dalam section
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Hapus class active dari semua menu
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Tambahkan class active pada menu yang sesuai
        const activeLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }
  
  // Panggil fungsi saat halaman pertama kali dimuat
  highlightActiveMenu();
  
  // Panggil fungsi saat halaman di-scroll
  window.addEventListener('scroll', highlightActiveMenu);

  // ========== Form Validasi ==========
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Dapatkan nilai input
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Validasi sederhana
      let isValid = true;
      let errorMessage = '';
      
      if (!name) {
        isValid = false;
        errorMessage += 'Nama harus diisi.\n';
      }
      
      if (!email) {
        isValid = false;
        errorMessage += 'Email harus diisi.\n';
      } else if (!isValidEmail(email)) {
        isValid = false;
        errorMessage += 'Format email tidak valid.\n';
      }
      
      if (!message) {
        isValid = false;
        errorMessage += 'Pesan harus diisi.\n';
      }
      
      // Jika valid, tampilkan pesan sukses
      if (isValid) {
        alert('Terima kasih, ' + name + '! Pesan Anda telah dikirim. Saya akan segera menghubungi Anda.');
        contactForm.reset();
      } else {
        alert('Mohon perbaiki error berikut:\n' + errorMessage);
      }
    });
  }
  
  // Fungsi untuk validasi format email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // ========== Animasi Skill Bar ==========
  // Fungsi untuk menganimasikan skill bar saat terlihat di viewport
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Observer untuk mendeteksi elemen yang masuk viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Jika elemen terlihat di viewport
        if (entry.isIntersecting) {
          // Simpan width asli
          const originalWidth = entry.target.getAttribute('data-width');
          
          // Tambahkan class untuk animasi
          entry.target.style.width = '0';
          
          // Setelah sedikit jeda, mulai animasi
          setTimeout(() => {
            entry.target.style.width = originalWidth;
          }, 300);
          
          // Hentikan observasi pada elemen ini
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    // Siapkan setiap skill bar untuk animasi
    skillBars.forEach(bar => {
      // Simpan width asli ke data attribute
      const width = bar.style.width;
      bar.setAttribute('data-width', width);
      
      // Set width awal ke 0
      bar.style.width = '0';
      
      // Mulai observasi
      observer.observe(bar);
    });
  }
  
  // Panggil fungsi animasi skill bar
  animateSkillBars();

});

// Ekspose fungsi untuk digunakan di file lain atau inline script
window.websiteUtils = {
  validateForm: function(form) {
    // Validasi form untuk digunakan di tempat lain
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;
    
    if (!name || !email || !message) {
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }
    
    return true;
  }
};