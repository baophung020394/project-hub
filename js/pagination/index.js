// js/pagination/index.js

export function loadPagination() {
  document.addEventListener("DOMContentLoaded", function() {
      fetch('components/pagination.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('pagination').innerHTML = data;

              const pageNumbers = document.querySelectorAll('.page-number');
              const prevArrow = document.querySelector('.page-arrow:first-child');
              const nextArrow = document.querySelector('.page-arrow:last-child');

              pageNumbers.forEach(button => {
                  button.addEventListener('click', () => {
                      pageNumbers.forEach(btn => btn.classList.remove('active'));
                      button.classList.add('active');
                      adjustArrowsState(button);
                  });
              });

              prevArrow.addEventListener('click', () => {
                  const currentPage = document.querySelector('.page-number.active');
                  if (currentPage.previousElementSibling && currentPage.previousElementSibling.classList.contains('page-number')) {
                      currentPage.classList.remove('active');
                      currentPage.previousElementSibling.classList.add('active');
                      adjustArrowsState(currentPage.previousElementSibling);
                  }
              });

              nextArrow.addEventListener('click', () => {
                  const currentPage = document.querySelector('.page-number.active');
                  if (currentPage.nextElementSibling && currentPage.nextElementSibling.classList.contains('page-number')) {
                      currentPage.classList.remove('active');
                      currentPage.nextElementSibling.classList.add('active');
                      adjustArrowsState(currentPage.nextElementSibling);
                  }
              });

              function adjustArrowsState(currentButton) {
                  prevArrow.disabled = !currentButton.previousElementSibling || !currentButton.previousElementSibling.classList.contains('page-number');
                  nextArrow.disabled = !currentButton.nextElementSibling || !currentButton.nextElementSibling.classList.contains('page-number');
              }

              adjustArrowsState(document.querySelector('.page-number.active'));
          })
          .catch(error => console.error('Error loading pagination:', error));
  });
}
