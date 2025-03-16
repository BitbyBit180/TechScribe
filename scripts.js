document.addEventListener('DOMContentLoaded', function() {
    // Filter functionality
    const subjectFilter = document.getElementById('subject-filter');
    const notesList = document.getElementById('notes-list');
    const noteItems = notesList ? notesList.getElementsByClassName('note-item') : [];
    const noResults = document.getElementById('no-results');

    function filterNotes() {
        const selectedSubject = subjectFilter.value;
        let hasResults = false;

        Array.from(noteItems).forEach(item => {
            const subject = item.getAttribute('data-subject');
            if (selectedSubject === 'all' || subject === selectedSubject) {
                item.style.display = 'block';
                hasResults = true;
            } else {
                item.style.display = 'none';
            }
        });

        noResults.style.display = hasResults ? 'none' : 'block';
    }

    if (subjectFilter) {
        subjectFilter.addEventListener('change', filterNotes);
        filterNotes();
    }

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link (optional)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});