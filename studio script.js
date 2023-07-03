// Code for studio section scroll

// Add the ScrollTrigger plugin from GSAP
gsap.registerPlugin(ScrollTrigger);

// Select the studio section
const studioSection = document.querySelector('.studio-sectin');

// Define the fade-in animation
const fadeInAnimation = gsap.timeline({
  defaults: { opacity: 0, ease: 'power2.out' },
  scrollTrigger: {
    trigger: studioSection,
    start: 'top 80%', // Adjust the start position as needed
  },
});

// Set the fade-in animation for the about section
fadeInAnimation.to(studioSection, { opacity: 1, duration: 2 });
