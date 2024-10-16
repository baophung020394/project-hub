// js/banner/index.js
export function loadBanner() {
  document.addEventListener("DOMContentLoaded", function() {
      fetch('components/banner.html')
          .then(response => response.text())
          .then(data => {
              // document.querySelector('main').innerHTML += data;
              document.getElementById('banner').innerHTML = data;
          })
          .catch(error => console.error('Error loading banner:', error));
  });
}
