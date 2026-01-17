// Slide Navigation
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideCounter = document.getElementById('slideCounter');

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Initialize first slide
    function init() {
        showSlide(0);
        updateNavigation();
    }

    // Show specific slide
    function showSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));

        // Add active class to current slide
        slides[index].classList.add('active');

        // Update counter
        slideCounter.textContent = `${index + 1} / ${totalSlides}`;

        // Update current slide index
        currentSlide = index;

        // Update navigation buttons
        updateNavigation();

        // Scroll to top of slide
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update navigation button states
    function updateNavigation() {
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }

    // Previous slide
    function prevSlide() {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    }

    // Next slide
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            showSlide(currentSlide + 1);
        }
    }

    // Event listeners for buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                prevSlide();
                break;
            case 'ArrowRight':
            case 'ArrowDown':
            case 'PageDown':
            case ' ':
                e.preventDefault();
                nextSlide();
                break;
            case 'Home':
                e.preventDefault();
                showSlide(0);
                break;
            case 'End':
                e.preventDefault();
                showSlide(totalSlides - 1);
                break;
        }
    });

    // Touch/swipe navigation for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                nextSlide();
            } else {
                // Swipe right - previous slide
                prevSlide();
            }
        }
    }

    // URL hash navigation
    function handleHashChange() {
        const hash = window.location.hash;
        if (hash) {
            const slideNum = parseInt(hash.replace('#slide-', ''));
            if (slideNum >= 1 && slideNum <= totalSlides) {
                showSlide(slideNum - 1);
            }
        }
    }

    // Update hash when slide changes
    function updateHash() {
        window.location.hash = `slide-${currentSlide + 1}`;
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Check for initial hash
    if (window.location.hash) {
        handleHashChange();
    } else {
        init();
    }

    // Optional: Add slide indicator dots
    function createSlideIndicators() {
        const nav = document.querySelector('.slide-nav');
        const indicatorContainer = document.createElement('div');
        indicatorContainer.className = 'slide-indicators';
        indicatorContainer.style.cssText = `
            display: flex;
            gap: 8px;
            margin: 0 15px;
        `;

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'slide-dot';
            dot.style.cssText = `
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: none;
                background: ${i === currentSlide ? '#ffd700' : 'rgba(255, 255, 255, 0.3)'};
                cursor: pointer;
                transition: background 0.3s ease;
            `;
            dot.addEventListener('click', () => showSlide(i));
            indicatorContainer.appendChild(dot);
        }

        // Insert after prev button
        nav.insertBefore(indicatorContainer, slideCounter);

        // Update dots on slide change
        const originalShowSlide = showSlide;
        window.showSlide = function(index) {
            originalShowSlide(index);
            updateDots();
        };
    }

    function updateDots() {
        const dots = document.querySelectorAll('.slide-dot');
        dots.forEach((dot, i) => {
            dot.style.background = i === currentSlide ? '#ffd700' : 'rgba(255, 255, 255, 0.3)';
        });
    }

    // Uncomment to enable slide indicator dots
    // createSlideIndicators();

    // Expose showSlide globally for potential external use
    window.showSlide = showSlide;
    window.currentSlide = () => currentSlide;
    window.totalSlides = () => totalSlides;
});
