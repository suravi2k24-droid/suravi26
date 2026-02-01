// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileEventsBtn = document.getElementById('mobile-events-btn');
const mobileEventsDropdown = document.getElementById('mobile-events-dropdown');

// Toggle main mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenuBtn.classList.toggle('active');

    // Reset events dropdown when closing main menu
    if (mobileMenu.classList.contains('hidden')) {
        mobileEventsDropdown.classList.remove('show');
        mobileEventsDropdown.classList.add('hidden');
    }
});

// Toggle events submenu on mobile
mobileEventsBtn?.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
    mobileEventsDropdown.classList.toggle('hidden');
    mobileEventsDropdown.classList.toggle('show');

    // Rotate chevron icon
    const icon = mobileEventsBtn.querySelector('i');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        mobileEventsDropdown.classList.remove('show');
        mobileEventsDropdown.classList.add('hidden');

        // Reset chevron icon
        const icon = mobileEventsBtn?.querySelector('i');
        if (icon) {
            icon.classList.add('fa-chevron-down');
            icon.classList.remove('fa-chevron-up');
        }
    }
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.classList.remove('active');
        mobileEventsDropdown.classList.remove('show');
        mobileEventsDropdown.classList.add('hidden');
    });
});

// Initialize counters on achievement page
if (document.getElementById('counter-1')) {
    initCounters();
}

// Parallax effect on scroll
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-element');
    parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Counter animation for achievement stats
function initCounters() {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200; // Lower is faster

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        updateCount();
    });
}

