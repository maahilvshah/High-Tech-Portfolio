document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Add form validation and submission logic here
        alert('Form submitted successfully!');
    });
});
