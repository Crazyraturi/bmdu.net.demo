// iosPage
function animateCounter(el, target, suffix) {
  let current = 0;
  const duration = 1200; // total ms
  const stepTime = 20;
  const steps = Math.ceil(duration / stepTime);
  const increment = target / steps;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = Math.floor(target) + suffix;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current) + suffix;
    }
  }, stepTime);
}

document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("highlights");
  if (!section) {
    console.warn("Highlights section not found");
    return;
  }
  const counters = section.querySelectorAll(".counter");
  if (!counters.length) {
    console.warn("No counters found inside highlights");
    return;
  }

  let triggered = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !triggered) {
          triggered = true;
          counters.forEach((el, idx) => {
            const target = parseInt(el.getAttribute("data-target"), 10);
            const suffix = el.getAttribute("data-suffix") || "";
            setTimeout(() => {
              animateCounter(el, target, suffix);
            }, idx * 150);
          });
          observer.unobserve(section);
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "0px 0px -50px 0px", // slightly less aggressive negative margin
    }
  );

  observer.observe(section);
});


  document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15 // trigger when ~15% visible
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // if only once
        }
      });
    };

    const observer = new IntersectionObserver(callback, observerOptions);
    document.querySelectorAll(".slide-up").forEach(el => {
      observer.observe(el);
    });
  });

// android 



document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".navbar .dropdown");
  const toggler = document.querySelector(".navbar-toggler");
  const navbar = document.getElementById("mainNavbar");
  const closeBtn = document.getElementById("closeNavbar");

  // ---------- Desktop hover open/close ----------
  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth > 991) {
        const menu = this.querySelector(".dropdown-menu");
        menu?.classList.add("show");
        this.classList.add("open");
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth > 991) {
        const menu = this.querySelector(".dropdown-menu");
        menu?.classList.remove("show");
        this.classList.remove("open");
      }
    });
  });

  // ---------- Mobile dropdown toggle ----------
  dropdowns.forEach((dropdown) => {
    const toggleLink = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    toggleLink.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        const isOpen = menu.classList.contains("show");

        // Close all menus first
        dropdowns.forEach((d) => {
          d.querySelector(".dropdown-menu")?.classList.remove("show");
          d.classList.remove("open");
        });

        // Toggle current one
        if (!isOpen) {
          menu.classList.add("show");
          dropdown.classList.add("open");
        }
      }
    });
  });

  // ---------- Close if clicked outside ----------
  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 991 && !e.target.closest(".dropdown") && !e.target.closest(".navbar-toggler")) {
      dropdowns.forEach((d) => {
        d.querySelector(".dropdown-menu")?.classList.remove("show");
        d.classList.remove("open");
      });
    }
  });

  // ---------- Mobile navbar toggler ----------
  toggler?.addEventListener("click", function () {
   
    document.body.classList.add("menu-open");
  });

  // ---------- Close button (mobile) ----------
  closeBtn?.addEventListener("click", function () {
    navbar.classList.remove("show");
    document.body.classList.remove("menu-open");

    // Close all dropdowns
    dropdowns.forEach((d) => {
      d.querySelector(".dropdown-menu")?.classList.remove("show");
      d.classList.remove("open");
    });
  });

  // ---------- Reset when resizing ----------
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) {
      navbar.classList.remove("show");
      document.body.classList.remove("menu-open");
      dropdowns.forEach((d) => {
        d.querySelector(".dropdown-menu")?.classList.remove("show");
        d.classList.remove("open");
      });
    }
  });
});

 let hasAnimated = false; // Prevent multiple animations

        // Counter animation function
        function animateCounter(element, target, suffix = '') {
            let current = 0;
            const increment = target / 100; // Adjust speed by changing denominator
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.innerHTML = target + suffix;
                    clearInterval(timer);
                } else {
                    element.innerHTML = Math.floor(current) + suffix;
                }
            }, 20); // Adjust timing for smoother/faster animation
        }

        // Function to start the counter animation
        function startCounterAnimation() {
            if (hasAnimated) return; // Prevent re-animation
            
            hasAnimated = true;
            const statNumbers = document.querySelectorAll('.stat-number');
            
            statNumbers.forEach((element, index) => {
                const target = parseInt(element.getAttribute('data-target'));
                const suffix = element.querySelector('span').textContent;
                
                // Clear the initial content
                element.innerHTML = '0' + suffix;
                
                // Start animation with slight delay for each card
                setTimeout(() => {
                    animateCounter(element, target, suffix);
                }, index * 100);
            });
        }

        // Intersection Observer to detect when section comes into view
        const observerOptions = {
            threshold: 0.5, // Trigger when 50% of the section is visible
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully in view
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounterAnimation();
                    // Optional: Stop observing after first trigger
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Start observing when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            const statsContainer = document.querySelector('.stats-container');
            observer.observe(statsContainer);
        });

        // Optional: Reset and restart animation on double-click (for testing)
        document.addEventListener('dblclick', () => {
            hasAnimated = false;
            const statNumbers = document.querySelectorAll('.stat-number');
            
            statNumbers.forEach(element => {
                const suffix = element.querySelector('span').textContent;
                element.innerHTML = '0' + suffix;
            });
            
            startCounterAnimation();
        });


        // rect native page 

        const slider = document.querySelector('.apps-slider');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let scrollAmount = 0;
const cardWidth = 320; // width of card + gap
const maxScroll = slider.scrollWidth - slider.clientWidth;

rightBtn.addEventListener('click', () => {
  if (scrollAmount < maxScroll) {
    scrollAmount += cardWidth;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

leftBtn.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= cardWidth;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var myCarousel = document.querySelector('#testimonial4');
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000, // Auto slide every 5 sec
    pause: 'hover'  // Pause on hover
  });

  // Optional: Add click listeners for custom next/prev
  document.querySelector('.carousel-control-next').addEventListener('click', function () {
    carousel.next();
  });

  document.querySelector('.carousel-control-prev').addEventListener('click', function () {
    carousel.prev();
  });
});
   // Add smooth scrolling and enhanced interactions
        document.querySelectorAll('.landing-faq-header').forEach(header => {
            header.addEventListener('click', function() {
                // Add a small delay to ensure smooth animation
                setTimeout(() => {
                    this.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 100);
            });
        });
        
        // Add hover effects to buttons
        document.querySelectorAll('.landing-btn-custom, .landing-btn-outline-custom').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // Add click handlers for buttons
        document.querySelector('.landing-btn-custom').addEventListener('click', function() {
            alert('More questions coming soon! Contact us for personalized assistance.');
        });
        
        document.querySelector('.landing-btn-outline-custom').addEventListener('click', function() {
            alert('Contact us at: info@digitalmarketing.com or call (555) 123-4567');
        });

// landing page
            


         





