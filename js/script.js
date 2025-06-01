// script.js
const sideMenu = document.getElementById("sideMenu");
const navBar = document.querySelector("nav");
// Select the desktop navigation links specifically
const navLinks = document.querySelector("nav ul.hidden.md\\:flex");

// --- Mobile Menu Functions ---
function openmenu() {
    if (sideMenu) {
        // TranslateX(0) brings the menu fully into view
        sideMenu.style.transform = 'translateX(0)';
    }
}

function closemenu() {
    if (sideMenu) {
        // TranslateX(100%) pushes the menu off-screen to the right
        sideMenu.style.transform = 'translateX(100%)';
    }
}

// Ensure mobile menu is hidden on larger screens if resized
window.addEventListener('resize', () => {
    // 768px is Tailwind's 'md' breakpoint
    if (window.innerWidth >= 768 && sideMenu) {
        sideMenu.style.transform = 'translateX(100%)';
    }
});

// --- Navbar Scroll Effect ---
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Add classes for scrolled state to the main navigation bar
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        // Removed navLinks class manipulation here as it caused unintended backgrounds.
    } else {
        // Remove classes for unscrolled state from the main navigation bar
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        // Removed navLinks class manipulation here.
    }
});

// --- Light Mode and Dark Mode Toggle ---
// Initial theme check on page load
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

// Function to toggle theme and save preference to local storage
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}
