// Scales Dominator - Interactive Features & Animations

// ============================================================================
// THEME TOGGLE
// ============================================================================

const toggleButton = document.getElementById("themeToggle");
const toggleIcon = document.getElementById("themeIcon");

function setTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
    toggleIcon.textContent = isDark ? "light_mode" : "dark_mode";
}

function initTheme() {
    const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
    toggleIcon.textContent = current === "dark" ? "light_mode" : "dark_mode";
}

toggleButton?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
});

initTheme();

// ============================================================================
// AUTHENTICATION MODAL
// ============================================================================

function openAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function switchAuthTab(tab) {
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (tab === 'login') {
        loginTab.classList.add('bg-white', 'dark:bg-surface-dark', 'text-text-main', 'dark:text-white', 'shadow-sm');
        loginTab.classList.remove('text-text-muted', 'dark:text-gray-400');
        signupTab.classList.remove('bg-white', 'dark:bg-surface-dark', 'text-text-main', 'dark:text-white', 'shadow-sm');
        signupTab.classList.add('text-text-muted', 'dark:text-gray-400');
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    } else {
        signupTab.classList.add('bg-white', 'dark:bg-surface-dark', 'text-text-main', 'dark:text-white', 'shadow-sm');
        signupTab.classList.remove('text-text-muted', 'dark:text-gray-400');
        loginTab.classList.remove('bg-white', 'dark:bg-surface-dark', 'text-text-main', 'dark:text-white', 'shadow-sm');
        loginTab.classList.add('text-text-muted', 'dark:text-gray-400');
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    }
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAuthModal();
});

// Form submission handlers
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Login form submitted');
    closeAuthModal();
});

document.getElementById('signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Signup form submitted');
    closeAuthModal();
});

// ============================================================================
// SMOOTH SCROLLING & NAVIGATION
// ============================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// ============================================================================
// ACTIVE NAVIGATION LINK TRACKING
// ============================================================================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-primary');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-primary');
        }
    });
});

// ============================================================================
// LAZY LOADING IMAGES
// ============================================================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================================================
// CONSOLE MESSAGE
// ============================================================================

console.log(
    '%c🏥 Scales Dominator',
    'font-size: 20px; font-weight: bold; color: #ea2a33;'
);
console.log(
    '%cPatient Acquisition Infrastructure',
    'font-size: 12px; color: #64748b;'
);
console.log(
    '%cBuilt with performance & conversion in mind ⚡',
    'font-size: 11px; color: #999;'
);
