// js/header/index.js

export function loadHeader() {
  document.addEventListener("DOMContentLoaded", function() {
      fetch('components/header.html')
          .then(response => response.text())
          .then(data => {
              document.querySelector('header').innerHTML = data;

              const menuToggle = document.querySelector('.menu-toggle');
              const navMenu = document.querySelector('.nav-menu');
              
              menuToggle.addEventListener('click', function() {
                  navMenu.classList.toggle('active');
              });
          })
          .catch(error => console.error('Error loading header:', error));
  });
}
