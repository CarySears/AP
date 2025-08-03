/ Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});

// Parallax effect for floating orbs
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.1);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle (if needed in future)
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Video modal functionality (if needed)
const videoModal = document.getElementById('video-modal');
const videoTriggers = document.querySelectorAll('[data-video]');
const closeModal = document.querySelector('.close-modal');

if (videoModal && videoTriggers.length > 0) {
    videoTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const videoId = this.getAttribute('data-video');
            const iframe = videoModal.querySelector('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            videoModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            videoModal.style.display = 'none';
            videoModal.querySelector('iframe').src = '';
            document.body.style.overflow = 'auto';
        });
    }

    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            videoModal.querySelector('iframe').src = '';
            document.body.style.overflow = 'auto';
        }
    });
}

// Cursor follower effect (subtle)
const cursor = document.createElement('div');
cursor.className = 'cursor-follower';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add cursor follower styles
const style = document.createElement('style');
style.textContent = `
    .cursor-follower {
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(46, 166, 212, 0.1);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        transform: translate(-50%, -50%);
    }
`;
document.head.appendChild(style);

// Read more functionality for testimonials or long content
document.querySelectorAll('.read-more-trigger').forEach(trigger => {
    trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const content = this.parentElement.querySelector('.read-more-content');
        if (content.style.display === 'none' || !content.style.display) {
            content.style.display = 'block';
            this.textContent = 'Read Less';
        } else {
            content.style.display = 'none';
            this.textContent = 'Read More';
        }
    });
});

// Number counter animation for statistics
const counters = document.querySelectorAll('.counter');
const animateCounters = () => {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const current = parseInt(counter.textContent);
        const increment = target / 100;
        
        if (current < target) {
            counter.textContent = Math.ceil(current + increment);
            setTimeout(animateCounters, 10);
        } else {
            counter.textContent = target;
        }
    });
};

// Trigger counter animation when in view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});
