// Gift data
const gifts = [
    {
        id: 1,
        title: "A Special Memory",
        description: "Remember that time when we first met? That moment changed my life forever.",
        icon: "💝"
    },
    {
        id: 2,
        title: "Virtual Hug",
        description: "Sending you the biggest, warmest virtual hug! 🤗",
        icon: "🤗"
    },
    {
        id: 3,
        title: "Friendship Playlist",
        description: "A collection of songs that remind me of our friendship.",
        icon: "🎵"
    },
    {
        id: 4,
        title: "Inside Joke",
        description: "Only we know why this is funny! 😂",
        icon: "😂"
    },
    {
        id: 5,
        title: "Future Plans",
        description: "All the amazing adventures we're going to have!",
        icon: "✈️"
    },
    {
        id: 6,
        title: "Birthday Wish",
        description: "May all your dreams come true!",
        icon: "⭐"
    },
    {
        id: 7,
        title: "Photo Memory",
        description: "One of our best moments together!",
        icon: "📸"
    },
    {
        id: 8,
        title: "Friendship Quote",
        description: "True friendship is the greatest gift of all.",
        icon: "📜"
    },
    {
        id: 9,
        title: "Virtual Cake",
        description: "A special birthday cake just for you!",
        icon: "🎂"
    },
    {
        id: 10,
        title: "Funny Memory",
        description: "Remember when we couldn't stop laughing?",
        icon: "🤣"
    },
    {
        id: 11,
        title: "Birthday Dance",
        description: "A special dance just for your birthday!",
        icon: "💃"
    },
    {
        id: 12,
        title: "Future Message",
        description: "Open this next year - it's a message for future you!",
        icon: "✉️"
    },
    {
        id: 13,
        title: "Birthday Surprise",
        description: "The biggest surprise is yet to come!",
        icon: "🎉"
    }
];

// Create gift boxes
function createGiftBoxes() {
    const giftsGrid = document.getElementById('giftsGrid');
    gifts.forEach(gift => {
        const giftBox = document.createElement('div');
        giftBox.className = 'gift-box';
        giftBox.innerHTML = `
            <div class="gift-icon">${gift.icon}</div>
            <h3 class="gift-title">Gift ${gift.id}</h3>
        `;
        giftBox.addEventListener('click', () => openGiftModal(gift));
        giftsGrid.appendChild(giftBox);
    });
}

// Modal functionality
function openGiftModal(gift) {
    const modal = document.getElementById('giftModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    modalTitle.textContent = gift.title;
    modalDescription.textContent = gift.description;
    modal.classList.add('active');

    // Add confetti effect
    createConfetti();
}

// Close modal
document.querySelector('.modal-close').addEventListener('click', () => {
    document.getElementById('giftModal').classList.remove('active');
});

// Confetti effect
function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${getRandomColor()};
            left: ${Math.random() * 100}vw;
            top: -10px;
            transform: rotate(${Math.random() * 360}deg);
            animation: fall ${Math.random() * 3 + 2}s linear;
        `;
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

function getRandomColor() {
    const colors = ['#ff69b4', '#9b4dca', '#ff99cc', '#ff1493'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Initialize gifts
document.addEventListener('DOMContentLoaded', createGiftBoxes);
