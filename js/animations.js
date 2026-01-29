// Parallax and Enhanced Effects for Neon Building
document.addEventListener('DOMContentLoaded', function () {
    // Parallax effect for neon building image
    const buildingContainer = document.querySelector('.neon-building-container');
    const buildingImage = document.querySelector('.neon-building-image');

    if (buildingContainer && buildingImage) {
        document.addEventListener('mousemove', (e) => {
            const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            const mouseY = (e.clientY / window.innerHeight) * 2 - 1;

            // Subtle parallax movement
            buildingContainer.style.transform = `
                perspective(1200px)
                rotateX(${mouseY * 5}deg)
                rotateY(${mouseX * 5}deg)
                translateZ(50px)
            `;

            // Enhanced glow following mouse position
            const glowIntensity = Math.abs(mouseX) + Math.abs(mouseY);
            buildingImage.style.filter = `
                brightness(${1.1 + glowIntensity * 0.1})
                contrast(${1.2 + glowIntensity * 0.1})
                saturate(${1.3 + glowIntensity * 0.2})
                drop-shadow(0 0 ${30 + glowIntensity * 20}px rgba(0, 243, 255, ${0.6 + glowIntensity * 0.2}))
                drop-shadow(0 0 ${50 + glowIntensity * 30}px rgba(157, 78, 221, ${0.4 + glowIntensity * 0.2}))
                drop-shadow(0 0 ${80 + glowIntensity * 40}px rgba(0, 255, 255, ${0.2 + glowIntensity * 0.15}))
            `;
        });

        // Reset on mouse leave
        document.addEventListener('mouseleave', () => {
            buildingContainer.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0)';
        });
    }

    // Scroll-based parallax depth effect
    const heroSection = document.querySelector('section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollProgress = window.scrollY / (window.innerHeight * 0.5);
            if (buildingImage && scrollProgress < 1) {
                buildingImage.style.transform = `scale(${1 - scrollProgress * 0.1}) translateY(${scrollProgress * 30}px)`;
                buildingImage.style.opacity = 1 - scrollProgress * 0.3;
            }
        });
    }
});

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);

    // Observe all elements with 'animate-on-scroll' class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // 3D tilt effect on cards
    const cards = document.querySelectorAll('.event-card, .category-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY = (x - centerX) / 25;
            const rotateX = (centerY - y) / 25;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});