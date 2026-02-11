// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Update active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksArray = Array.from(document.querySelectorAll('.nav-links a'));
    
    navLinksArray.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && mobileMenuToggle && 
            !navLinks.contains(e.target) && 
            !mobileMenuToggle.contains(e.target) &&
            navLinks.classList.contains('mobile-open')) {
            navLinks.classList.remove('mobile-open');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // RSVP Form handling
    const rsvpForm = document.getElementById('rsvp-form');
    const formStatus = document.getElementById('form-status');
    const attendingSelect = document.getElementById('attending');
    const guestsGroup = document.getElementById('guests-group');
    const guestsInput = document.getElementById('guests');
    
    // Show/hide guests field based on attendance
    if (attendingSelect && guestsGroup) {
        attendingSelect.addEventListener('change', () => {
            if (attendingSelect.value === 'yes') {
                guestsGroup.style.display = 'block';
                if (guestsInput) {
                    guestsInput.required = true;
                }
            } else {
                guestsGroup.style.display = 'none';
                if (guestsInput) {
                    guestsInput.required = false;
                    guestsInput.value = '';
                }
            }
        });
        
        // Set initial state
        if (attendingSelect.value !== 'yes') {
            guestsGroup.style.display = 'none';
            if (guestsInput) {
                guestsInput.required = false;
            }
        }
    }
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(rsvpForm);
            const data = Object.fromEntries(formData.entries());
            
            // Validate guests if attending
            if (data.attending === 'yes' && (!data.guests || parseInt(data.guests) < 1)) {
                if (formStatus) {
                    formStatus.textContent = 'Please enter the number of guests.';
                    formStatus.className = 'form-status error';
                }
                return;
            }
            
            // Show loading state
            const submitBtn = rsvpForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';
            if (formStatus) {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                console.log('RSVP Data:', data);
                
                // Show success message
                if (formStatus) {
                    formStatus.textContent = 'Thank you! Your RSVP has been received.';
                    formStatus.className = 'form-status success';
                }
                
                // Reset form
                rsvpForm.reset();
                if (guestsGroup) {
                    guestsGroup.style.display = 'none';
                }
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Scroll to status
                if (formStatus) {
                    formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            }, 1000);
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections
    const animatedElements = document.querySelectorAll('.event-preview-card, .travel-card, .save-date-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
