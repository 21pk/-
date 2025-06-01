document.addEventListener('DOMContentLoaded', () => {
    const messageCards = document.querySelectorAll('.message-card');
    
    // Add staggered animation to message cards
    messageCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.3}s`;
        
        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add click effect to show full message if it's too long
    messageCards.forEach(card => {
        const messageText = card.querySelector('.message-text');
        if (messageText.scrollHeight > messageText.clientHeight) {
            card.addEventListener('click', () => {
                card.classList.toggle('expanded');
                if (card.classList.contains('expanded')) {
                    messageText.style.maxHeight = messageText.scrollHeight + 'px';
                } else {
                    messageText.style.maxHeight = null;
                }
            });
        }
    });
});
