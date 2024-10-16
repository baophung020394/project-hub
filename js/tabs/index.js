// js/tabs/index.js

export function loadTabs() {
    document.addEventListener("DOMContentLoaded", function() {
        // Tải nội dung tabs.html
        fetch('components/tabs.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('tabs').innerHTML = data;
                loadProfileCards();
                setupTabEvents();
            })
            .catch(error => console.error('Error loading tabs:', error));
    });
}

function loadProfileCards() {
    // Tải nội dung của best-matches
    fetch('components/profile-card.html')
        .then(response => response.text())
        .then(profileCardData => {
            document.getElementById('best-matches').innerHTML = profileCardData;
        })
        .catch(error => console.error('Error loading best-matches profile card:', error));

    // Tải nội dung của most-recent
    fetch('components/profile-card-recent.html')
        .then(response => response.text())
        .then(profileCardData => {
            document.getElementById('most-recent').innerHTML = profileCardData;
        })
        .catch(error => console.error('Error loading most-recent profile card:', error));

    // Tải nội dung của saved-partner
    fetch('components/profile-card-saved.html')
        .then(response => response.text())
        .then(profileCardData => {
            document.getElementById('saved-partner').innerHTML = profileCardData;
        })
        .catch(error => console.error('Error loading saved-partner profile card:', error));
}

function setupTabEvents() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const contentId = tab.getAttribute('data-content');
            document.getElementById(contentId).classList.add('active');
        });
    });
}
