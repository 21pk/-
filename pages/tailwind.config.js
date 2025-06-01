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
        // When scrolled down: Add classes for background, blur, and shadow to the main navigation bar
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        // IMPORTANT FIX: Removed manipulation of navLinks classes here.
        // The navLinks (desktop menu UL) should now maintain its initial styling from HTML, which is transparent.
    } else {
        // When at the top: Remove classes from the main navigation bar to make it transparent again
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        // IMPORTANT FIX: Removed manipulation of navLinks classes here.
        // This was the source of the white overlay at the top, as it was adding bg-white when not scrolled.
    }
});

// --- Light Mode and Dark Mode Toggle ---
// Initial theme check on page load: Apply dark mode if user preference is dark or system preference is dark.
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    // Otherwise, ensure dark mode class is removed (for light mode).
    document.documentElement.classList.remove('dark');
}

// Function to toggle theme and save preference to local storage
function toggleTheme() {
    // Toggle the 'dark' class on the root HTML element
    document.documentElement.classList.toggle('dark');
    // Save the current theme preference to local storage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}
