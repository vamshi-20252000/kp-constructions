// Scroll animation  //

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".animate").forEach(section => {
  observer.observe(section);
});

// Image Slider //

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlide ? "block" : "none";
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function changeSlide(step) {
  currentSlide += step;
  showSlide(currentSlide);
}

function autoSlide() {
  currentSlide++;
  showSlide(currentSlide);
  setTimeout(autoSlide, 5000); 
}

function createDots() {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.getElementById("dotsContainer");

  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
    dotsContainer.appendChild(dot);
  });
}

window.onload = () => {
  createDots();
  showSlide(currentSlide);
  autoSlide();
};


// whatsapp logic //

function openWhatsApp() {
  const number = "917032653963";
  const message = "Hello, I want more info!";
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Phone Or Whatsapp Redirect //

  const phoneLink = document.getElementById('phoneLink');
  const phoneNumber = '+917989195689';

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    phoneLink.href = `tel:${phoneNumber}`;
  } else {
    phoneLink.href = `https://wa.me/${phoneNumber.replace('+', '')}`;
  }
