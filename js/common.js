// Navigation active state
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Utility functions
function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}

// Animation helper
function animateElement(element, animation) {
    element.style.animation = 'none';
    element.offsetHeight; // Trigger reflow
    element.style.animation = animation;
}

// Form submission handler
function handleFormSubmit(event, formId, successMessage = 'Message sent successfully!') {
    event.preventDefault();
    const form = document.getElementById(formId);
    
    // You can add actual form submission logic here
    // For now, we'll just show a success message
    alert(successMessage);
    form.reset();
}
