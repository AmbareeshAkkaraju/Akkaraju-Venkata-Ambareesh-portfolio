document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Skill Bar Animation
    const skillBars = document.querySelectorAll('.progress-bar');
    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.width;
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Custom cursor
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, .card').forEach(element => {
        element.addEventListener('mouseover', () => cursor.classList.add('hover'));
        element.addEventListener('mouseout', () => cursor.classList.remove('hover'));
    });

    // Hero section parallax and fade effect
    const heroSection = document.getElementById('hero');
    const heroContent = heroSection.querySelector('.container'); // Assuming content is inside .container

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroHeight = heroSection.offsetHeight;

        // Calculate scroll progress (0 to 1)
        // 0 when at the top of the hero section, 1 when scrolled past it
        const scrollProgress = Math.min(scrollY / heroHeight, 1);

        // Scale effect: zooms in as we scroll down
        // Starts at 1 (no zoom), goes up to 1.2 (20% zoom)
        const scale = 1 + (scrollProgress * 0.2);
        
        // Blur effect: blurs as we scroll down
        // Starts at 0 (no blur), goes up to 5px blur
        const blur = scrollProgress * 5;

        // Opacity effect: fades out as we scroll down
        // Starts at 1 (fully visible), goes down to 0 (fully transparent)
        const opacity = 1 - scrollProgress;

        heroContent.style.transform = `scale(${scale})`;
        heroContent.style.opacity = opacity;

        // Removed display manipulation for hero section
    });

    // Updated Particles.js configuration for a more subtle look
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 2,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": false,
            },
            "move": {
                "enable": true,
                "speed": 0.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false
                },
                "onclick": {
                    "enable": false
                },
                "resize": true
            }
        },
        "retina_detect": true
    });
});