function expandImage(clickedBox) {
  const allBoxes = document.querySelectorAll(".image-box");
  allBoxes.forEach((box) => box.classList.remove("active"));
  clickedBox.classList.add("active");
}

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  prevBtn.classList.add("active");
  nextBtn.classList.remove("active");
});

nextBtn.addEventListener("click", () => {
  nextBtn.classList.add("active");
  prevBtn.classList.remove("active");
});

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");


leftArrow.addEventListener("click", () => {
  leftArrow.classList.add("active");
  rightArrow.classList.remove("active");
});

rightArrow.addEventListener("click", () => {
  rightArrow.classList.add("active");
  leftArrow.classList.remove("active");
});

// Trigger when section enters viewport
function animateCircles() {
  const circles = document.querySelectorAll(".circle-box");
  circles.forEach((circle) => {
    const delay = parseInt(circle.getAttribute("data-delay"), 10);
    setTimeout(() => {
      circle.classList.add("active");
    }, delay);
  });
}

// Use IntersectionObserver to run animation only once
const bubbleobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCircles();
      bubbleobserver.disconnect(); // Run only once
    }
  });
});

bubbleobserver.observe(document.querySelector(".stats-section"));

const items = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

items.forEach((item) => observer.observe(item));

const observers1 = document.querySelectorAll(".fade-in");

const callback1 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

const observer1 = new IntersectionObserver(callback1, {
  threshold: 0.2,
});

observers1.forEach((el) => observer1.observe(el));




      prevBtn.addEventListener("click", () => {
        prevBtn.classList.add("active");
        nextBtn.classList.remove("active");
      });

      nextBtn.addEventListener("click", () => {
        nextBtn.classList.add("active");
        prevBtn.classList.remove("active");
      });
