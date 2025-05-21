// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles background
    initParticles();

    // Initialize mobile menu
    initMobileMenu();

    // Initialize scroll to top button
    initScrollToTop();

    // Initialize skill animations
    initSkillAnimations();

    // Initialize portfolio filters
    initPortfolioFilters();

    // Initialize form submission
    initContactForm();

    // Initialize smooth scrolling for navigation links
    initSmoothScrolling();

    // Update active navigation link on scroll
    updateNavOnScroll();
});

// Initialize particles.js
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00c7ff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00c7ff",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
}

// Mobile menu functionality
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Change icon based on menu state
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');

                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
}

// Scroll to top button functionality
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animate skills on scroll
function initSkillAnimations() {
    const skillSection = document.getElementById('about');
    const skillBars = document.querySelectorAll('.skill-progress');

    if (skillSection && skillBars.length) {
        const animateSkills = () => {
            const sectionTop = skillSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });

                // Remove the event listener once animation is triggered
                window.removeEventListener('scroll', animateSkills);
            }
        };

        // Initial check
        animateSkills();

        // Add event listener
        window.addEventListener('scroll', animateSkills);
    }
}

// Portfolio filtering functionality
function initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterBtns.length && portfolioItems.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(filterBtn => {
                    filterBtn.classList.remove('active');
                });

                // Add active class to clicked button
                btn.classList.add('active');

                // Get filter value
                const filterValue = btn.getAttribute('data-filter');

                // Filter portfolio items
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

// Contact form submission handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                showFormAlert('Harap isi semua kolom yang diperlukan!', 'error');
                return;
            }

            // Here you would typically send the form data to a server
            // This is just a simulation for demo purposes

            // Show success message
            showFormAlert('Pesan Anda telah terkirim. Terima kasih!', 'success');

            // Reset form
            contactForm.reset();
        });
    }
}

// Helper function to show form alerts
function showFormAlert(message, type) {
    // Check if alert element already exists
    let alertElement = document.querySelector('.form-alert');

    // If not, create one
    if (!alertElement) {
        alertElement = document.createElement('div');
        alertElement.className = 'form-alert';

        // Insert after the form
        const contactForm = document.getElementById('contactForm');
        contactForm.parentNode.insertBefore(alertElement, contactForm.nextSibling);
    }

    // Set alert content and style
    alertElement.textContent = message;
    alertElement.className = `form-alert ${type}`;

    // Add some basic styling
    alertElement.style.padding = '10px 15px';
    alertElement.style.marginTop = '20px';
    alertElement.style.borderRadius = '4px';
    alertElement.style.fontWeight = '500';

    if (type === 'success') {
        alertElement.style.background = 'rgba(0, 199, 255, 0.1)';
        alertElement.style.color = '#00c7ff';
        alertElement.style.border = '1px solid rgba(0, 199, 255, 0.3)';
    } else {
        alertElement.style.background = 'rgba(255, 99, 71, 0.1)';
        alertElement.style.color = '#ff6347';
        alertElement.style.border = '1px solid rgba(255, 99, 71, 0.3)';
    }

    // Remove alert after 5 seconds
    setTimeout(() => {
        alertElement.style.opacity = '0';
        alertElement.style.transform = 'translateY(-10px)';
        alertElement.style.transition = 'all 0.3s ease';

        setTimeout(() => {
            alertElement.remove();
        }, 300);
    }, 5000);
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Update active navigation link based on scroll position
function updateNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        const navHeight = document.querySelector('header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Detect when elements enter viewport for animations
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Header shrink on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.height = '60px';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.height = '70px';
        header.style.boxShadow = 'none';
    }
});