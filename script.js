


// Hero animation replaced with native Video tag


// Intersection Observer for section animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Smooth scroll for navigation (if added later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3D Tilt Effect
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});

// Feedback Modal Logic
const feedbackBtn = document.getElementById('feedbackBtn');
const feedbackModal = document.getElementById('feedbackModal');
const closeModal = document.getElementById('closeModal');
const feedbackForm = document.getElementById('feedbackForm');

if (feedbackBtn && feedbackModal && closeModal && feedbackForm) {
    feedbackBtn.addEventListener('click', () => {
        feedbackModal.classList.add('active');
    });

    closeModal.addEventListener('click', () => {
        feedbackModal.classList.remove('active');
    });

    feedbackModal.addEventListener('click', (e) => {
        if (e.target === feedbackModal) {
            feedbackModal.classList.remove('active');
        }
    });

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate submission
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.innerText;

        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.innerText = 'Thank You!';
            submitBtn.style.backgroundColor = '#4CAF50';

            setTimeout(() => {
                feedbackModal.classList.remove('active');
                feedbackForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
            }, 1500);
        }, 1000);
    });
}

// Navigation Bar Logic
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        // Toggle the 'open' class defined in CSS
        mobileMenu.classList.toggle('open');

        // Also toggle the icon between bars and times (X)
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            if (mobileMenu.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}




document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = document.getElementById("feedbackForm");
    const formData = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbzrQ7piH-YT4JCePi6NecL4Enry83WKj0qG4l9z-mGGwPQUXdQiPuLmUjSfTVNRXCLK8Q/exec", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Feedback submitted successfully!");
        form.reset();
        document.getElementById("feedbackModal").style.display = "none";
    })
    .catch(error => {
        alert("Error submitting feedback");
        console.error(error);
    });
});
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));


