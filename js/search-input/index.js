// js/search-input/index.js

export function loadSearchInput() {
  document.addEventListener("DOMContentLoaded", function() {
      fetch('../components/search-input.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('search-input').innerHTML = data;
          })
          .catch(error => console.error('Error loading search input:', error));
  });
}
