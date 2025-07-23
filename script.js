// --- script.js ---

// Particle.js configuration remains the same
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "transparent" }
    },
    opacity: {
      value: 0.5,
      random: false
    },
    size: {
      value: 22,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 5,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Typewriter Effect
const typedTextSpan = document.getElementById("typed-text");
const textArray = [
  "I am a Full Stack Developer",
  "I am a Trader",
  "I am a Backend Developer"
];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 40);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, 300);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, 1000);
});

// --- GSAP ANIMATIONS ---

// ✅ Register ScrollTrigger Plugin
// Note: You need to include the GSAP and ScrollTrigger libraries for this to work.
// Since you haven't included them in your HTML, these animations won't run.
// To fix this, add these script tags to your HTML before your script.js file:
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
gsap.registerPlugin(ScrollTrigger);

// ✅ Animate skill cards on scroll
gsap.from(".skill-card", {
  scrollTrigger: {
    trigger: ".skills-section",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});

// ✅ Animate progress bars on scroll
document.querySelectorAll(".fill").forEach(bar => {
  const percent = bar.getAttribute("data-percent");
  bar.style.width = "0%"; // start from 0

  ScrollTrigger.create({
    trigger: bar,
    start: "top 90%",
    onEnter: () => {
      bar.style.width = percent + "%";
      bar.textContent = percent + "%";
    }
  });
});


// ✅ About GSAP Animations
gsap.from(".about-image img", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
  },
  opacity: 0,
  scale: 0.5,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".about-text", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 80%",
  },
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 0.3,
  ease: "power2.out"
});


// ✅ Contact Form Submission
const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch("https://formspree.io/f/mgvybjba", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData
    });
    if (response.ok) {
      statusMsg.textContent = "✅ Message sent successfully!";
      form.reset();
    } else {
      statusMsg.textContent = "❌ Oops! Something went wrong.";
    }
  } catch (error) {
    statusMsg.textContent = "❌ Error sending message.";
  }
});


// --- script.js (CORRECTED Hamburger Toggle Logic) ---

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Optional: close menu when link clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});
