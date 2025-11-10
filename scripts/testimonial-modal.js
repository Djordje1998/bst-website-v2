// Testimonial Text Expand/Collapse Functionality (Desktop Only)
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on mobile (768px or less)
    function isMobile() {
        return window.innerWidth <= 768;
    }
    
    // Check if text is actually overflowing (needs truncation)
    function isTextOverflowing(element) {
        // Temporarily remove truncation to check full height
        const wasTruncated = element.classList.contains('truncated');
        element.classList.remove('truncated');
        
        const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
        const maxHeight = lineHeight * 3; // 3 lines
        const actualHeight = element.scrollHeight;
        
        // Restore truncation if it was there
        if (wasTruncated) {
            element.classList.add('truncated');
        }
        
        return actualHeight > maxHeight;
    }
    
    // Initialize testimonial cards
    function initTestimonials() {
        const testimonialBlocks = document.querySelectorAll('.testimonial-block');
        
        testimonialBlocks.forEach(function(block) {
            const textElement = block.querySelector('.text');
            const cardContent = block.querySelector('.card-content');
            
            // Remove existing read-more button if present
            const existingBtn = block.querySelector('.read-more-btn');
            if (existingBtn) {
                existingBtn.remove();
            }
            
            if (isMobile()) {
                // On mobile: Always show full text, no truncation, no button
                textElement.classList.remove('truncated', 'expanded');
            } else {
                // On desktop: Check if text needs truncation
                if (isTextOverflowing(textElement)) {
                    // Add truncated class for desktop
                    textElement.classList.add('truncated');
                    
                    // Create read more button
                    const readMoreBtn = document.createElement('button');
                    readMoreBtn.className = 'read-more-btn';
                    readMoreBtn.textContent = 'Prikaži više';
                    
                    // Insert after text element
                    textElement.parentNode.insertBefore(readMoreBtn, textElement.nextSibling);
                    
                    // Toggle expand/collapse on desktop
                    readMoreBtn.addEventListener('click', function() {
                        if (textElement.classList.contains('truncated')) {
                            textElement.classList.remove('truncated');
                            textElement.classList.add('expanded');
                            readMoreBtn.textContent = 'Prikaži manje';
                        } else {
                            textElement.classList.remove('expanded');
                            textElement.classList.add('truncated');
                            readMoreBtn.textContent = 'Prikaži više';
                        }
                    });
                } else {
                    // Text is short enough, no truncation needed
                    textElement.classList.remove('truncated', 'expanded');
                }
            }
        });
    }
    
    // Initialize on load
    initTestimonials();
    
    // Re-initialize on window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            initTestimonials();
        }, 250);
    });
});
