// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Background Change on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(139, 69, 19, 0.95)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--brown), var(--orange))';
    }
});

// Animate Numbers in Stats Section
const animateNumbers = () => {
    const numbers = document.querySelectorAll('.stat-number');
    
    numbers.forEach(number => {
        const target = parseInt(number.textContent);
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            number.textContent = Math.floor(current) + '+';
        }, 50);
    });
};

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            
            // Animate stats when about section is visible
            if (entry.target.classList.contains('about')) {
                setTimeout(animateNumbers, 500);
            }
        }
    });
}, observerOptions);

// Observe elements for animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    // Simulate form submission
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً');
    contactForm.reset();
});

// Course Buttons Interaction
document.querySelectorAll('.btn-course').forEach(button => {
    button.addEventListener('click', () => {
        alert('سيتم توجيهك إلى صفحة الدورة قريباً!');
    });
});

// Hero Buttons Interaction
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent.includes('ابدأ التعلم')) {
            document.querySelector('#courses').scrollIntoView({
                behavior: 'smooth'
            });
        } else if (e.target.textContent.includes('اكتشف المزيد')) {
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
        } else if (e.target.textContent.includes('اقرأ المزيد')) {
            alert('ستتم إضافة المزيد من المعلومات قريباً!');
        }
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    section {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(139, 69, 19, 0.95);
            padding: 20px;
            gap: 1rem;
        }
    }
`;
document.head.appendChild(style);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Show first section immediately
    document.querySelector('#home').style.opacity = '1';
    
    console.log('منصة DAMJ جاهزة للاستخدام!');
});