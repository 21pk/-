class Particle {
    constructor(container) {
        this.container = container;
        this.element = document.createElement('div');
        this.element.className = 'particle';
        
        // Random properties
        this.size = Math.random() * 10 + 5;
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        
        // Style the particle
        this.element.style.cssText = `
            position: absolute;
            width: ${this.size}px;
            height: ${this.size}px;
            background: ${this.getRandomColor()};
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            pointer-events: none;
            left: ${this.x}px;
            top: ${this.y}px;
        `;
        
        container.appendChild(this.element);
    }
    
    getRandomColor() {
        const colors = [
            '#ff69b4', // Pink
            '#9b4dca', // Purple
            '#ff99cc', // Light pink
            '#ff1493', // Deep pink
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off walls
        if (this.x <= 0 || this.x >= window.innerWidth) this.speedX *= -1;
        if (this.y <= 0 || this.y >= window.innerHeight) this.speedY *= -1;
        
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
    }
}

// Initialize particles
const particleContainer = document.getElementById('particles');
const particles = [];
const numberOfParticles = 50;

for (let i = 0; i < numberOfParticles; i++) {
    particles.push(new Particle(particleContainer));
}

// Animation loop
function animate() {
    particles.forEach(particle => particle.update());
    requestAnimationFrame(animate);
}

animate();
