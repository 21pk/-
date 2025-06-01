document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const letterContent = document.querySelector('.letter-content');
    
    // Add paper texture effect
    letterContent.style.backgroundImage = "url('../images/paper-texture.png')";
    
    // Handle form submission
    messageForm.addEventListener('submit', (e) => {
        handleFormSubmit(e, 'messageForm', 'Thank you for your message! ❤️');
    });
    
    // Add typing animation to letter paragraphs
    const paragraphs = letterContent.querySelectorAll('p');
    paragraphs.forEach((p, index) => {
        p.style.opacity = '0';
        p.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            p.style.transition = 'opacity 1s ease, transform 1s ease';
            p.style.opacity = '1';
            p.style.transform = 'translateY(0)';
        }, 500 + (index * 300));
    });
    
    // Add form animations
    const formInputs = messageForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'scale(1.02)';
            input.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        });
        
        input.addEventListener('blur', () => {
            input.style.transform = 'scale(1)';
            input.style.boxShadow = 'none';
        });
    });
});
