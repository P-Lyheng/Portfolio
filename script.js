
        // Theme Toggle Functionality
        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        }

        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Typing Animation
        const phrases = [
            "P-Lyheng",
            "a Fullstack Developer",
            "a Problem Solver",
            "a Tech Enthusiast",
            "Your Next Developer"
        ];
        let currentPhrase = 0;
        let currentChar = 0;
        let isDeleting = false;

        function typeWriter() {
            const current = phrases[currentPhrase];
            const typingElement = document.getElementById('typingText');
            
            if (isDeleting) {
                typingElement.textContent = current.substring(0, currentChar - 1);
                currentChar--;
            } else {
                typingElement.textContent = current.substring(0, currentChar + 1);
                currentChar++;
            }
            
            if (!isDeleting && currentChar === current.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
            }
            
            const speed = isDeleting ? 50 : 100;
            setTimeout(typeWriter, speed);
        }

        // Start typing animation after page load
        setTimeout(typeWriter, 1000);

        // Scroll Progress Bar
        window.addEventListener('scroll', () => {
            const scrollProgress = document.querySelector('.scroll-progress');
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / scrollable) * 100;
            scrollProgress.style.width = progress + '%';
        });

        // Smooth scrolling for navigation links
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

        // Enhanced navbar background on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.boxShadow = '0 4px 20px var(--shadow)';
            } else {
                nav.style.boxShadow = 'none';
            }
        });

        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Show/hide floating button based on scroll
        window.addEventListener('scroll', () => {
            const floatingBtn = document.querySelector('.floating-btn');
            if (window.scrollY > 300) {
                floatingBtn.style.opacity = '1';
                floatingBtn.style.transform = 'scale(1)';
            } else {
                floatingBtn.style.opacity = '0';
                floatingBtn.style.transform = 'scale(0)';
            }
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }
            });
        }, observerOptions);

        // Observe elements for scroll animations
        document.querySelectorAll('.project-card, .service-card, .testimonial-card, .timeline-item, .stat-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px) scale(0.95)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });

        // Interactive skill icons with fun effects
        document.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-3px) scale(1.02)';
                const logo = item.querySelector('.skill-logo');
                if (logo) {
                    logo.style.transform = 'scale(1.2) rotate(5deg)';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
                const logo = item.querySelector('.skill-logo');
                if (logo) {
                    logo.style.transform = 'scale(1) rotate(0deg)';
                }
            });

            // Add click effect for skill items
            item.addEventListener('click', () => {
                item.style.animation = 'skillBounce 0.6s ease';
                setTimeout(() => {
                    item.style.animation = '';
                }, 600);
            });
        });

        // Enhanced tech chip interactions
        document.querySelectorAll('.tech-chip').forEach(chip => {
            chip.addEventListener('mouseenter', () => {
                chip.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            chip.addEventListener('mouseleave', () => {
                chip.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add skill bounce animation
        const skillStyle = document.createElement('style');
        skillStyle.textContent = `
            @keyframes skillBounce {
                0%, 20%, 60%, 100% { transform: translateY(0) scale(1); }
                40% { transform: translateY(-15px) scale(1.05); }
                80% { transform: translateY(-5px) scale(1.02); }
            }
        `;
        document.head.appendChild(skillStyle);

        // Add bounce animation for clicks
        const style = document.createElement('style');
        style.textContent = `
            @keyframes bounce {
                0%, 20%, 60%, 100% { transform: translateY(0) scale(1); }
                40% { transform: translateY(-20px) scale(1.2); }
                80% { transform: translateY(-10px) scale(1.1); }
            }
        `;
        document.head.appendChild(style);

        // Add random particle colors
        document.querySelectorAll('.particle').forEach(particle => {
            const colors = ['#667eea', '#764ba2', '#ffd700', '#ff6b6b', '#4ecdc4'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.animationDuration = (Math.random() * 4 + 6) + 's';
        });

        // Easter egg: Konami code
        let konamiCode = [];
        const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.keyCode);
            if (konamiCode.length > konami.length) {
                konamiCode.shift();
            }
            if (konamiCode.toString() === konami.toString()) {
                document.body.style.animation = 'rainbow 2s infinite';
                setTimeout(() => {
                    document.body.style.animation = '';
                    alert('🎉 You found the easter egg! You\'re awesome!');
                }, 2000);
            }
        });

        // Add rainbow animation
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);

        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            if (parallax) {
                const speed = scrolled * 0.5;
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });
   