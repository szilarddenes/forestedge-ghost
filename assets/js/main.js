/**
 * Forest Edge Ghost Theme JavaScript
 * Snook-inspired interactions and animations
 */

(function() {
    'use strict';
    
    // Initialize everything when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        initMobileMenu();
        initSmoothScroll();
        initShareButtons();
        initDonationAnimations();
        initImageLazyLoading();
        initCircleAnimations();
        initPostCardAnimations();
        initProgressAnimations();
        initHeaderScroll();
    });
    
    /**
     * Mobile Menu Toggle
     */
    function initMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav-overlay');
        const body = document.body;
        
        if (!menuToggle || !mobileNav) return;
        
        menuToggle.addEventListener('click', function() {
            const isActive = mobileNav.classList.contains('active');
            
            if (isActive) {
                mobileNav.classList.remove('active');
                body.classList.remove('menu-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            } else {
                mobileNav.classList.add('active');
                body.classList.add('menu-open');
                menuToggle.setAttribute('aria-expanded', 'true');
            }
        });
        
        // Close menu when clicking overlay
        mobileNav.addEventListener('click', function(e) {
            if (e.target === mobileNav) {
                mobileNav.classList.remove('active');
                body.classList.remove('menu-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                body.classList.remove('menu-open');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    /**
     * Initialize smooth scrolling with Lenis (if enabled)
     */
    function initSmoothScroll() {
        if (typeof Lenis === 'undefined' || !document.body.classList.contains('smooth-scroll')) {
            return;
        }
        
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });
        
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        
        requestAnimationFrame(raf);
        
        // GSAP integration if available
        if (typeof gsap !== 'undefined') {
            lenis.on('scroll', (e) => {
                gsap.to(window, {duration: 0, scrollTo: e.scroll});
            });
        }
    }
    
    /**
     * Social Share Buttons
     */
    function initShareButtons() {
        const copyButtons = document.querySelectorAll('.share-copy');
        
        copyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const url = this.getAttribute('data-url');
                
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(url).then(() => {
                        showShareFeedback(this, 'Link copied!');
                    }).catch(() => {
                        fallbackCopyToClipboard(url, this);
                    });
                } else {
                    fallbackCopyToClipboard(url, this);
                }
            });
        });
        
        // Add click tracking for social shares
        const shareButtons = document.querySelectorAll('.share-btn[href]');
        shareButtons.forEach(button => {
            button.addEventListener('click', function() {
                const platform = this.classList.contains('share-twitter') ? 'twitter' :
                               this.classList.contains('share-facebook') ? 'facebook' :
                               this.classList.contains('share-linkedin') ? 'linkedin' : 'unknown';
                
                // Track share event (you can integrate with analytics here)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'share', {
                        method: platform,
                        content_type: 'article',
                        item_id: window.location.pathname
                    });
                }
            });
        });
    }
    
    function fallbackCopyToClipboard(text, button) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            showShareFeedback(button, 'Link copied!');
        } catch (err) {
            showShareFeedback(button, 'Copy failed');
        }
        
        document.body.removeChild(textArea);
    }
    
    function showShareFeedback(button, message) {
        const originalText = button.querySelector('.share-text').textContent;
        const textElement = button.querySelector('.share-text');
        
        textElement.textContent = message;
        button.style.pointerEvents = 'none';
        
        setTimeout(() => {
            textElement.textContent = originalText;
            button.style.pointerEvents = 'auto';
        }, 2000);
    }
    
    /**
     * Donation Button Animations
     */
    function initDonationAnimations() {
        const donationFloat = document.querySelector('.donation-float');
        const donationButtons = document.querySelectorAll('.donation-btn, .donation-cta-button');
        
        // Add hover effect to donation buttons
        donationButtons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05) translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) translateY(0)';
            });
        });
        
        // Hide floating donation button when donation CTA is visible
        if (donationFloat) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        donationFloat.style.opacity = '0';
                        donationFloat.style.pointerEvents = 'none';
                    } else {
                        donationFloat.style.opacity = '1';
                        donationFloat.style.pointerEvents = 'auto';
                    }
                });
            });
            
            const donationCTAs = document.querySelectorAll('.donation-cta');
            donationCTAs.forEach(cta => observer.observe(cta));
        }
    }
    
    /**
     * Lazy Loading for Images
     */
    function initImageLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                            img.removeAttribute('data-srcset');
                        }
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            const lazyImages = document.querySelectorAll('img[data-src], img[data-srcset]');
            lazyImages.forEach(img => {
                img.classList.add('lazy');
                imageObserver.observe(img);
            });
        }
    }
    
    /**
     * Homepage Circle Animations
     */
    function initCircleAnimations() {
        const circles = document.querySelectorAll('.circle-item');
        
        if (circles.length === 0) return;
        
        // Stagger animation on load
        circles.forEach((circle, index) => {
            circle.style.opacity = '0';
            circle.style.transform = 'scale(0.8)';
            circle.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                circle.style.opacity = '1';
                circle.style.transform = 'scale(1)';
            }, index * 100);
        });
        
        // Add hover animations
        circles.forEach(circle => {
            circle.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            
            circle.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    /**
     * Post Card Animations
     */
    function initPostCardAnimations() {
        const postCards = document.querySelectorAll('.post-card');
        
        if (postCards.length === 0) return;
        
        // Intersection Observer for cards
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Set initial state and observe
        postCards.forEach((card, index) => {
            // Don't animate cards that are initially visible
            const rect = card.getBoundingClientRect();
            if (rect.top > window.innerHeight) {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }
            
            cardObserver.observe(card);
        });
        
        // Add progressive enhancement for hover effects
        postCards.forEach(card => {
            const image = card.querySelector('.post-card-image');
            const readMore = card.querySelector('.post-card-read-more');
            
            card.addEventListener('mouseenter', function() {
                if (image) {
                    image.style.transform = 'scale(1.05)';
                }
                if (readMore) {
                    const arrow = readMore.querySelector('.read-more-arrow');
                    if (arrow) {
                        arrow.style.transform = 'translateX(4px)';
                    }
                }
            });
            
            card.addEventListener('mouseleave', function() {
                if (image) {
                    image.style.transform = 'scale(1)';
                }
                if (readMore) {
                    const arrow = readMore.querySelector('.read-more-arrow');
                    if (arrow) {
                        arrow.style.transform = 'translateX(0)';
                    }
                }
            });
        });
    }
    
    /**
     * Progress Bar Animations
     */
    function initProgressAnimations() {
        const progressBars = document.querySelectorAll('.donation-progress-fill');
        
        if (progressBars.length === 0) return;
        
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const targetWidth = progressBar.style.width;
                    
                    // Reset width and animate
                    progressBar.style.width = '0%';
                    setTimeout(() => {
                        progressBar.style.width = targetWidth;
                    }, 200);
                    
                    progressObserver.unobserve(progressBar);
                }
            });
        }, {
            threshold: 0.5
        });
        
        progressBars.forEach(bar => {
            progressObserver.observe(bar);
        });
    }
    
    /**
     * Header Scroll Effects
     */
    function initHeaderScroll() {
        const header = document.querySelector('.site-header');
        if (!header) return;
        
        let lastScrollY = window.scrollY;
        let ticking = false;
        
        function updateHeader() {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide header when scrolling down, show when scrolling up
            if (scrollY > lastScrollY && scrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollY = scrollY;
            ticking = false;
        }
        
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }
        
        window.addEventListener('scroll', requestTick);
    }
    
    /**
     * Utility Functions
     */
    
    // Debounce function for performance
    function debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    // Throttle function for scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Export functions for potential external use
    window.ForestEdgeTheme = {
        debounce: debounce,
        throttle: throttle
    };
    
})();