// Animate the contact form on scroll into view
const contactForm = document.getElementById("contactForm");

const contactObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      anime({
        targets: '#contactForm',
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 1000,
        easing: 'easeOutExpo'
      });
      contactObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

contactObserver.observe(contactForm);
