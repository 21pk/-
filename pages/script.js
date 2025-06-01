// script.js
const sideMenu = document.getElementById("sideMenu");
const navBar = document.querySelector("nav");
// Select the desktop navigation links specifically to avoid affecting the mobile menu
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
        // Add classes for scrolled state (background, blur, shadow)
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        // Remove classes from desktop nav links if they had specific initial styles
        if (navLinks) {
            navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
        }
    } else {
        // Remove classes for unscrolled state
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        // Add back initial classes to desktop nav links
        if (navLinks) {
            navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
        }
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
