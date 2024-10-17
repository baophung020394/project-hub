export function loadFilter() {
    document.addEventListener("DOMContentLoaded", function() {
        fetch('../components/filter.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('filter').innerHTML = data;
  
                const filterHeaders = document.querySelectorAll('.filter-header');
  
                filterHeaders.forEach(header => {
                    header.addEventListener('click', function() {
                        const contentId = header.getAttribute('data-toggle');
                        const content = document.getElementById(contentId);
                        content.classList.toggle('active');
                    });
                });
            })
            .catch(error => console.error('Error loading filter:', error));
    });
  }
  