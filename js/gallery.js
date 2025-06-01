document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Add hover effects
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            animateElement(item, 'pulse 0.5s ease');
        });
    });

    // Create image modal if it doesn't exist
    if (!document.getElementById('imageModal')) {
        const modal = document.createElement('div');
        modal.id = 'imageModal';
        modal.className = 'image-modal';
        modal.innerHTML = `
            <img class="modal-image" alt="Full size image">
        `;
        document.body.appendChild(modal);

        // Close modal on click
        modal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // Add click handlers to gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const modal = document.getElementById('imageModal');
            const modalImage = modal.querySelector('.modal-image');
            
            // In a real implementation, you would use actual image paths
            // For now, we'll just show the placeholder text
            const placeholderText = item.querySelector('.placeholder-image').textContent;
            modalImage.src = `../images/${placeholderText.toLowerCase().replace(/\s+/g, '-')}.jpg`;
            modalImage.alt = item.querySelector('p').textContent;
            
            modal.classList.add('active');
        });
    });
});
