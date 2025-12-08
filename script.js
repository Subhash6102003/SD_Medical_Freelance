// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navRight = document.querySelector('.nav-right');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navRight.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Navbar Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
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

// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('h3');
    if (question) {
        question.style.cursor = 'pointer';
        question.addEventListener('click', () => {
            item.classList.toggle('active');
            
            // Add smooth expansion animation
            const answer = item.querySelector('p');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    }
});

// Enhanced Scroll Reveal Animation - Fast & Responsive
const revealOptions = {
    threshold: 0.05, // Trigger earlier
    rootMargin: '0px 0px 50px 0px' // Start animation before element fully in view
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Once revealed, stop observing
            revealObserver.unobserve(entry.target);
        }
    });
}, revealOptions);

// Add scroll reveal to sections and cards with minimal stagger
const revealElements = document.querySelectorAll('section, .proof-card, .value-card, .step-card, .testimonial-card, .faq-item');
revealElements.forEach((element, index) => {
    element.classList.add('scroll-reveal');
    // Much smaller delay for faster appearance
    element.style.transitionDelay = `${index * 0.02}s`;
    revealObserver.observe(element);
});

// Animated Counter for Stats (if you add them later)
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Button Ripple Effect
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// CTA Button Click Handlers with Animation Feedback
const ctaButtons = document.querySelectorAll('.btn-primary');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        console.log('CTA clicked:', this.textContent);
        // Add your conversion tracking or redirect here
        // Example: window.location.href = '/contact';
    });
});

// Phone Link Click Tracking with Animation
const phoneLinks = document.querySelectorAll('.phone-link');
phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
        console.log('Phone link clicked');
        // Add analytics tracking here if needed
        
        // Visual feedback
        this.style.transform = 'scale(1.05)';
        setTimeout(() => {
            this.style.transform = '';
        }, 300);
    });
});

// Parallax Effect for Hero Section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.transform = `translateY(${parallax}px)`;
    });
}

// Mouse Trail Effect (subtle)
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Typing Effect for Headlines (optional - uncomment to use)
/*
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}
*/

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('animate-in');
    }
});

// Add to cart / bookmark animation (for future use)
function pulseAnimation(element) {
    element.style.animation = 'pulse 0.5s ease-in-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Intersection Observer for lazy loading images (when you add real images)
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        }
    });
});

// Progress Bar on Scroll
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #7C3AED, #3B82F6);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

console.log('🚀 Enhanced animations loaded successfully!');
