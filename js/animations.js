// Animations JavaScript file for portfolio website
// Typing animation for hero section
document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.typing-text');
    if (textElement) {
        const textToType = textElement.textContent;
        textElement.textContent = '';
        
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < textToType.length) {
                textElement.textContent += textToType.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
                
                // After typing is complete, add class for cursor blinking
                textElement.classList.add('typing-complete');
            }
        }, 100);
    }
    
    // Initialize skill bar animations
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(level => {
        level.style.width = '0%';
    });
    
    // Trigger skill bar animation when in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const targetWidth = skillLevel.style.width;
                
                // Reset width to 0 before animation
                skillLevel.style.width = '0%';
                
                // Set timeout to allow for the reset to take effect
                setTimeout(() => {
                    skillLevel.style.width = targetWidth;
                }, 200);
                
                // Unobserve after animation
                observer.unobserve(skillLevel);
            }
        });
    }, { threshold: 0.5 });
    
    skillLevels.forEach(level => {
        // Store the target width
        const targetWidth = level.getAttribute('style').split('width:')[1].trim();
        level.style.width = '0%';
        
        // Observe the skill level element
        observer.observe(level);
    });
    
    // Animate project cards on hover
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover-effect');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover-effect');
        });
    });
    
    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            if (scrollValue < window.innerHeight) {
                const parallaxValue = scrollValue * 0.4;
                heroSection.style.backgroundPositionY = `-${parallaxValue}px`;
            }
        });
    }
});
