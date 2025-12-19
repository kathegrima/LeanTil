// LeanTil Static Site - Main JavaScript

// Current language state
let currentLang = 'en';

// Initialize the site
document.addEventListener('DOMContentLoaded', function() {
  initLanguageSelector();
});

// Language Selector
function initLanguageSelector() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  
  // Update active button
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
  
  // Update all translatable elements
  document.querySelectorAll('[data-it][data-en]').forEach(function(el) {
    var text = lang === 'it' ? el.getAttribute('data-it') : el.getAttribute('data-en');
    el.textContent = text;
  });
  
  // Update html lang attribute
  document.documentElement.lang = lang;
  
  // Update illustration alt text
  var illustrationImg = document.querySelector('.illustration-img');
  if (illustrationImg) {
    illustrationImg.alt = lang === 'it' 
      ? 'Illustrazione di persona seduta su sedia ergonomica' 
      : 'Person sitting on ergonomic chair illustration';
  }
  
  // Update scroll button aria-label
  var scrollBtn = document.querySelector('.scroll-btn');
  if (scrollBtn) {
    scrollBtn.setAttribute('aria-label', lang === 'it' ? 'Scorri verso il basso' : 'Scroll down');
  }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// FAQ Accordion
function toggleFaq(button) {
  var faqItem = button.closest('.faq-item');
  var isOpen = faqItem.classList.contains('open');
  
  // Close all FAQ items
  document.querySelectorAll('.faq-item').forEach(function(item) {
    item.classList.remove('open');
  });
  
  // Open the clicked one if it wasn't already open
  if (!isOpen) {
    faqItem.classList.add('open');
  }
}
