// js/profile-card/index.js

export function loadProfileCard() {
  document.addEventListener("DOMContentLoaded", function() {
      fetch('components/profile-card.html')
          .then(response => response.text())
          .then(data => {
              // Chèn nội dung vào phần tử có id='profile-card'
              document.getElementById('profile-card').innerHTML = data;
          })
          .catch(error => console.error('Error loading profile card:', error));
  });
}
