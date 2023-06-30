// JavaScript code for the text slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
}

function nextSlide() {
  slides[currentSlide].style.opacity = 0; // Fade out the current slide
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  setTimeout(showSlide, 1500); // Delay showing the next slide to allow fade-out transition
}

showSlide(); // Show the initial slide
setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as desired)





// code for cta button color effect

const ctaButton = document.getElementById('cta-button');

// Animate the background color using GSAP
gsap.to(ctaButton, {
  backgroundColor: "#c75e22", // Final background color
  duration: 3, // Animation duration (in seconds)
  repeat: -1, // Repeat indefinitely
  yoyo: true, // Reverse the animation back and forth
});



const imageContainer = document.querySelector('.image-container');

function animateColor() {
  gsap.to(imageContainer, {
    backgroundColor: '#740B8E',
    repeat: -1,
    yoyo: true,
    duration: 3
  });
}

animateColor();




// Code for about us section scroll

// Add the ScrollTrigger plugin from GSAP
gsap.registerPlugin(ScrollTrigger);

// Select the about section
const aboutSection = document.querySelector('.about-us');

// Define the fade-in animation
const fadeInAnimation = gsap.timeline({
  defaults: { opacity: 0, ease: 'power2.out' },
  scrollTrigger: {
    trigger: aboutSection,
    start: 'top 80%', // Adjust the start position as needed
  },
});

// Set the fade-in animation for the about section
fadeInAnimation.to(aboutSection, { opacity: 1, duration: 2 });








// Animation for services image
gsap.registerPlugin(ScrollTrigger);

function animateServiceItems() {
  // Select all service items
  const serviceItems = document.querySelectorAll('.service-item');

  // Loop through each service item and apply the slide-in animation
  serviceItems.forEach((item, index) => {
    gsap.fromTo(
      item,
      { x: -100, opacity: 0 }, // Initial state
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: index * 0.4,
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
        },
      }
    );
  });
}

animateServiceItems(); // Initial animation on page load

ScrollTrigger.addEventListener('refresh', animateServiceItems); // Re-apply animations on scroll refresh


