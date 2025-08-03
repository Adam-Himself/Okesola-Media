// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();
  
    navLinks.forEach(link => {
      if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
  
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();
  
    navLinks.forEach(link => {
      if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
  
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();
  
    navLinks.forEach(link => {
      if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  
    // Scroll fade-up effect
    const fadeElements = document.querySelectorAll('.fade-up');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    fadeElements.forEach(el => observer.observe(el));
  
    // Optional: thankyou.html auto redirect back to home after 5 seconds
    if (currentPage === 'thankyou.html') {
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 5000);
    }
  });
      