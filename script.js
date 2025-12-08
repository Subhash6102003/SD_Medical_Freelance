// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navRight = document.querySelector('.nav-right');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navRight.classList.toggle('active');
    });
}

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

// FAQ Accordion Functionality (if you want to add collapsible FAQs later)
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('h3');
    if (question) {
        question.style.cursor = 'pointer';
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// CTA Button Click Handlers (you can customize these)
const ctaButtons = document.querySelectorAll('.btn-primary');
ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        // You can add form modal, redirect to booking page, or other actions
        console.log('CTA clicked:', button.textContent);
        // Example: window.location.href = '/contact';
    });
});

// Phone Link Click Tracking
const phoneLinks = document.querySelectorAll('.phone-link');
phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone link clicked');
        // Add analytics tracking here if needed
    });
});
