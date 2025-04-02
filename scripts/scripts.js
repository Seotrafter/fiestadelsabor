document.addEventListener('DOMContentLoaded', function() {
        // Select all forms
        const forms = document.querySelectorAll('form');

        // Iterate over each form
        forms.forEach(function(form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent default form submission
                // Redirect to the Thank You page
                window.location.href = '/thanks-page.html';
            });
        });
    });