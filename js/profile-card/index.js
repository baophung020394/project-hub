// js/profile-card/index.js

export function loadProfileCard() {
  document.addEventListener("DOMContentLoaded", function() {
      fetch('../components/profile-card.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('profile-card').innerHTML = data;
          })
          .catch(error => console.error('Error loading profile card:', error));
  });
}
